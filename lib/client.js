import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';
// import { ImageUrlBuilder } from 'next-sanity-image'

export const client = createClient({
    projectId: "oj2weruo",
    dataset: "production",
    apiVersion: "2022-05-01",
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)