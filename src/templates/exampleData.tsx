interface Data {
    title: string
    children: Data[] | null
}

export const exampleData: Data[] = [
    {
        title: "A big section",
        children: [
            {
                title: "About Us",
                children: [
                    {
                        title: "The team",
                        children: null
                    }
                ]
            },
            {
                title: "Hello",
                children: null
            }
        ]
    },
    {
        title: "More stuff",
        children: null
    },
    {
        // h2
        title: "Conclusion",
        children: null
    }
]