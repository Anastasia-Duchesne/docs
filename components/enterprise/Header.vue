<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-6 align-items-center d-flex order-1 order-md-0">
                    <div>
                        <h1 data-aos="fade-right"><span class="dot">Kestra Enterprise</span> to Scale Your Workflows.</h1>
                        <p data-aos="fade-left" class="baseline">Designed for production workloads with high-security standards and Enterprise-grade governance.</p>
                        <div class="d-flex gap-2 mb-2 mb-md-0">
                            <NuxtLink href="https://kestra.io/demo" target="_blank" class="btn btn-animated btn-purple-animated" data-aos="zoom-in">
                                Talk to Us
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 order-0 order-md-1">
                    <img class="img-fluid" src="/landing/ee/background.svg" alt="Illustration of Kestra's logo with a dark background" data-aos="zoom-in"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../../assets/styles/variable";

    .container-fluid {
        color: var(--bs-white);
        background: url("/landing/ee/background-mask.svg") no-repeat center;
        background-size: 100% 100%;
        overflow: hidden;
        .container {
            border-bottom: $block-border;

            h1 {
                font-size: $font-size-4xl;
                font-weight: 300;
                margin-bottom: 2rem;
                padding: 0;

                span {
                    background: linear-gradient(90deg, #E151F7 0.45%, #5C47F5 43.61%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }

            .img-fluid {
                max-height: 100%;
            }
            .baseline {
                font-size: $font-size-xl;
                font-weight: 300;
            }

            .btn-dark {
                border: $btn-dark-border;
            }

            @include media-breakpoint-down(md) {
                .row {
                    position: relative;

                    & > div:first-child {
                        z-index: 1;
                    }

                    & > :last-child {
                        z-index: 0;
                        margin: 0 auto;
                        top: 0;
                    }
                }
            }
        }

    }
</style>