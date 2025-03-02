import {slugify} from "~/utils/url.js";
import {recursivePages} from "~/utils/navigation.js";
import type {SitemapUrlInput} from "@nuxtjs/sitemap/dist/runtime/types";

const generateDefaultSitemap = async () => {
    type SitemapsToGenerate = { rootUrl: string, apiUrl: string, sitemap?: string };
    const sitemapsToGenerate: Array<SitemapsToGenerate> = [
        {
            rootUrl: '/blueprints/',
            apiUrl: 'https://api.kestra.io/v1/blueprints',
        },
        {
            rootUrl: '/use-cases/stories/',
            apiUrl: 'https://api.kestra.io/v1/customer-stories'
        }
    ];

    type PaginatedSitemapData = { totalPages: number, data: Array<SitemapUrlInput> };
    const fetchPageToSitemapFormat = async (sitemapInput: SitemapsToGenerate, page: number): Promise<PaginatedSitemapData> => {
        const pageSize = 20;
        const pageUrl = `${sitemapInput.apiUrl}?page=${page}&size=${pageSize}`;
        const response = await $fetch<{ total: number, results: [{id: string, title: string}] }>(pageUrl);
        return {
            totalPages: Math.ceil(response.total / pageSize),
            data: response.results.map(page => asSitemapUrl({
                loc: `${sitemapInput.rootUrl}${page.id}-${slugify(page.title)}`,
                _sitemap: sitemapInput.sitemap ?? 'default'
            }))
        };
    };

    const promises = sitemapsToGenerate.map(async sitemapInput => {
        let page = 1;
        let result;

        let data: Array<SitemapUrlInput> = [];

        do {
            result = await fetchPageToSitemapFormat(sitemapInput, page);
            data = data.concat(result.data);
            page++;
        } while (page <= result.totalPages);

        return data;
    });

    return (await Promise.all(promises)).flat();
}

const generatePluginsSitemap = async () => {
    type NavigationElement = { isPage?: boolean, children: NavigationElement[] };
    const pluginsNav = await $fetch<[NavigationElement]>('/api/plugins?type=navigation');
    return (recursivePages(pluginsNav[0]) as string[])
        // already included in nuxt-generated sitemap (due to having an index file)
        .filter(path => !path.endsWith('/plugins'))
        .map(path => asSitemapUrl({
            loc: path,
            _sitemap: 'plugins'
        }));
}

export default defineSitemapEventHandler(async () => {
    let defaultSitemap = await generateDefaultSitemap();
    let pluginSitemap = await generatePluginsSitemap();
    return [
        ...defaultSitemap,
        ...pluginSitemap
    ];
});
