module.exports = {
    post:{
        tags: ['Accounts operations'],
        description: "Deleting an Accout",
        operationId: "deleteAccount",
        parameters:[
            {
                name:"email",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/email"
                },
                required:true,
                description: "Deleting an Account with Email"
            }
        ],
        responses:{
            '200':{
                description:"Account Deleted Successfully"
            },
            '404':{
                description:"Account Not Found"
            },
            '500':{
                description:"Server Error"
            }
        }
    }
}