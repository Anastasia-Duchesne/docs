<template>
    <div class="container-fluid">
        <div class="hero container">
            <div class="row">
                <div class="col-md-6 align-items-center d-flex order-1 order-md-0">
                    <div>
                        <h1 data-aos="fade-right"><span>Declarative</span> Orchestration with Kestra</h1>
                        <p class="baseline" data-aos="fade-left">Bring Infrastructure as Code Best Practices to All Workflows</p>
                        <div class="cta d-flex gap-3">
                            <NuxtLink href="https://github.com/kestra-io/kestra" class="btn btn-animated btn-dark-animated" data-aos="zoom-in">
                                Get started
                            </NuxtLink>
                            <a href="/docs/getting-started"  class="btn btn-animated btn-purple-animated" data-aos="zoom-in">
                                Read the docs
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 order-0 order-md-1" data-aos="zoom-in">
                    <img class="zoom img-fluid" src="/landing/features/declarative/header.svg" alt="A screenshot of the user interface of Kestra's application"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../../../assets/styles/variable";

    .container-fluid {
        background: url("/landing/features/declarative/header-bg.svg") no-repeat;
        background-size: cover;
        color: var(--bs-white);
        padding-top: 80px;
        margin-top: -80px;
        .container {
            border-bottom: $block-border;

            h1 {
                color: $white;
                font-size: $font-size-4xl;
                font-weight: 300;
                padding-bottom: 0;
                margin-bottom: 16px;

                span {
                    background: linear-gradient(90deg, #E151F7 2.16%, #5C47F5 65.09%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }

            p {
                color: $white;
                font-size: $font-size-xl;
                font-weight: 300;
                margin-bottom: 2rem;
                padding-bottom: 0;
            }

            .btn-dark {
                border: 1px solid $black-6;
            }
        }

        .hero{
            padding-bottom: 0rem;
            @include media-breakpoint-down(md) {
                padding-top: 0;
            }
        }

    }
</style>

