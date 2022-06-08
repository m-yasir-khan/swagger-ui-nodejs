module.exports = {
    get: {
        tags: ['Accounts operations'],
        description: "Get Accounts",
        operationId: 'getAccounts',
        parameters: [
            {
                name: "limit",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/limit"
                },
                required: true,
                description: "Limit to Fetch Accounts"
            },
            {
                name: "page",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/page"
                },
                required: true,
                description: "Records For Each Page"
            }
        ],
        responses: {
            '200': {
                description: "Accounts were obtained",
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Todo'
                        }
                    }
                }
            }
        }
    }
}