const DATA = [
    {
        id: 1,
        name: "DrillingInfo",
        folders: [
            {
                id: 1,
                name: "Emre`s Folder",
                charts: [
                    {
                        id: 1,
                        name: "Emre`s Chart"
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "PVR",
        folders: [
            {
                id: 2,
                name: "Emre`s Folder",
                charts: [
                    {
                        id: 2,
                        name: "Emre`s Chart"
                    }
                ]
            },
            {
                id: 3,
                name: "Ryan`s Folder",
                charts: [
                    {
                        id: 3,
                        name: "Ryan`s Chart"
                    },
                    {
                        id: 4,
                        name: "Ryan`s Chart 2"
                    }
                ]
            }
        ]
    }
];

const resolvers = {
    Query: {
        getAllSchemas: () => {
            return DATA;
        },
        getAllFoldersFromSchema: (root, { id }) => {
            const schema = DATA.find(schema => schema.id === parseInt(id));
            return schema.folders
        },
        getSchemaData: (root, { id }) => {
            return DATA.find(schema => schema.id === parseInt(id));
        }
    }
}

export default resolvers;