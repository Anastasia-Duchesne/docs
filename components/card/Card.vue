<template>
    <div class="card bg-dark-2" :class="number ? 'number-card' : ''" data-aos="zoom-in">
        <div class="card-body">
            <div class="d-flex gap-3 title-block">
                <span v-if="icon" class="card-icon"><component :is="icon" /></span>
                <span v-if="img" class="card-icon">
                    <img :src="img" :alt="imgAlt">
                </span>
                <span v-if="number" class="card-icon">
                    <p class="number">{{number}}</p>
                </span>
                <h4 v-if="title" class="card-title">{{title}}</h4>
            </div>
            <p v-if="description" class="card-text">{{description}}</p>
            <p v-if="$slots.descriptionHtml" class="card-text">
                <slot name="descriptionHtml"></slot>
            </p>
        </div>
    </div>
    <svg width="0" height="0">
        <defs>
            <linearGradient id="featureiconsgradient" x1="4.99595" y1="6.83411" x2="31.2214" y2="33.0161" gradientUnits="userSpaceOnUse">
                <stop offset="0.015625" stop-color="#F2D5FF"/>
                <stop offset="1" stop-color="#CB5AFF"/>
            </linearGradient>
        </defs>
    </svg>
</template>
<script>
    export default {
        name: "Card",
        props: {
            icon: {
                default: undefined,
            },
            img: {
                default: undefined,
            },
            imgAlt: {
                default: undefined,
            },
            title: {
                default: undefined,
            },
            description: {
                default: undefined,
            },
            number: {
                default: null,
            },
        },
    };
</script>
<style lang="scss" scoped>
@import "../../assets/styles/variable";

.card {
    border-radius: calc($spacer / 2);
    border: $block-border;
    color: $white;
    padding: 2rem;
    height: 100%;

    @include media-breakpoint-down(lg) {
        padding: 2rem 1rem;
    }

    @include media-breakpoint-down(md) {
        padding: 2rem;
    }

    .card-body {
        padding: 0;
        display: flex;
        gap: 1rem;
        flex-direction: column;

        .title-block {
          @include media-breakpoint-down(md) {
            flex-wrap: nowrap;
          }
        }

        .card-title {
            font-weight: 300;
            font-size: $font-size-xl;
        }

        .card-text {
            color: $white-1;
            font-size: $font-size-sm;
            font-weight: 400;
        }

        .card-icon {
            float: none;
            border-radius: 8px;
            background: $black-4;
            position: relative;
            margin: 0;
            width: calc($spacer * 3.75);
            min-width: calc($spacer * 3.75);
            height: calc($spacer * 3.75);

            &:before {
                content: '';
                position: absolute;
                top: -0.5px; right: 0; bottom: 0; left: 0;
                z-index: -1;
                margin: -1px;
                border-radius: inherit;
                background: linear-gradient(90deg, rgba(176,16,251,1) 0%, rgba(222,151,255,1) 14%, rgba(162,39,219,1) 28%, rgba(255,255,255,0.4654236694677871) 50%, rgba(166,16,236,0.8435749299719888) 72%);
            }

            :deep(.material-design-icon) {
                filter: drop-shadow(2px 4px 4px rgba(186, 53, 249, 0.25));

                svg path {
                    fill: url(#featureiconsgradient);
                }
            }

            .number {
                font-family: $font-family-sans-serif;
                font-size: $h2-font-size;
                font-style: normal;
                font-weight: 100;
                background: linear-gradient(90deg, #E151F7 2.16%, #5C47F5 65.09%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                margin: 0;
            }
        }
    }
}
</style>
