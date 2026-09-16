import { defineCollection, z } from 'astro:content'

const work = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        projectCategory: z.enum(['Work', 'Extra']),
        // Comma-separated in Contentful; tagUtilities splits it into tags.
        projectType: z.string(),
        role: z.string(),
        projectLink: z.string().url().optional(),
        startDate: z.date(),
        endDate: z.date().optional(),
        protected: z.boolean().default(false),
        coverPhoto: image(),
        coverPhotoAlt: z.string().default(''),
        productImages: z.array(z.object({
            src: image(),
            caption: z.string().default(''),
        })).optional(),
    }),
})

export const collections = { work }
