export const lifeInsuranceItems = [
    {
        id: "1",
        title: "Permanent Life",
        type: "tab",
        children: [
            { title: "Amount of Cover", type: "input", name: "amount", placeholder: "Enter Amount" },
            {
                title: "Who is cover for?",
                type: "tabs",
                children: [
                    { id: "1", title: "Myself", type: "select" },
                    { id: "2", title: "My Partner", type: "select" },
                    { id: "3", title: "Father", type: "select" },
                    { id: "4", title: "Mother", type: "select" },
                    { id: "5", title: "Parents", type: "select" },
                ]
            },
        ]
    },
    {
        id: "2",
        title: "Term Life",
        type: "tab",
        children: [
            { title: "Amount of Cover", type: "input", name: "amount", placeholder: "Enter Amount" },
            {
                title: "Who is cover for?",
                type: "tabs",
                children: [
                    { id: "1", title: "Myself", type: "select" },
                    { id: "2", title: "My Partner", type: "select" },
                    { id: "3", title: "Father", type: "select" },
                    { id: "4", title: "Mother", type: "select" },
                    { id: "5", title: "Parents", type: "select" },
                ]
            },
        ]
    },
    {
        id: "3",
        title: "Group Life",
        type: "tab",
    }
]