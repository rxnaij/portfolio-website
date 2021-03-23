- h2: "A big section"
- h3: "About Us"
- h4: "The team'
- h3: "Hello"
- h2: "More stuff"
- h2: "Conclusion"

```
<ul>
    <li>
        <h2>A big section</h2>
    </li>
    <ul>
        <li>
            <h3>About Us</h3>
        </li>
    </ul>
</ul>
```

<ul>
    <li>
        <h2>A big section</h2>
    </li>
    <ul>
        <li>
            <h3>About Us</h3>
        </li>
    </ul>
</ul>

```
[
    {
        title: "A big section",
        id: 1
        parentId: null
        children: [
            {
                title: "About Us",
                id: 2,
                parentId: 1,
                children: [
                    {
                        title: "The team"
                    }
                ]
            }
        ]
    },
    {
        // h2
        title: "Conclusion"
    }
]
```