module.exports = {
    get: {
        tags: ['Accounts operations'],
        description: "Get an Account",
        operationId: "getAccount",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/userID"
                },
                required: true,
                description: "A single User's Account"
            }
        ],
        responses: {
            '200': {
                description: "Account is obtained",
                content: {
                    'application/json': {
                        schema: {
                            $ref: "#/components/schemas/Todo"
                        }
                    }
                }
            },
            '404': {
                description: "Account is not found",
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Error',
                            example: {
                                message: "We can't find the Account",
                                internal_code: "Invalid id"
                            }
                        }
                    }
                }
            }
        }
    }
}