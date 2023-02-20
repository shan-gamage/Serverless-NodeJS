export const handler =  async (event: any) => {
    console.log(event);
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hi Shan you can do this right"})
    }
}