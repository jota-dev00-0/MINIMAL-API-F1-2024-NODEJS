import fastify from "fastify";
import cors from "@fastify/cors"

const server = fastify({logger: true})

server.register(cors, {
    origin: "*"
})

const teams = [
    {id: 1, name: "Scuderia Ferrari", base: "Maranello, Italy"},
    {id: 2, name: "McLaren", base: "Woking, United Kingdom"},
    {id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom"},
    {id: 4, name: "Mercedes-AMG PETRONAS F1 Team", base: "Brackley, United Kingdom"},
    {id: 5, name: "Aston Martin Aramco F1 Team", base: "Silverstone, United Kingdom"},
    {id: 6, name: "BWT Alpine F1 Team", base: "Enstone, United Kingdom"},
    {id: 7, name: "MoneyGram Haas F1 Team", base: "Kannapolis, United States"},
    {id: 8, name: "Visa Cash App RB Formula One Team", base: "Faenza, Italy"},
    {id: 9, name: "Williams Racing", base: "Grove, United Kingdom"},
    {id: 10, name: "Stake F1 Team Kick Sauber", base: "Hinwil, Switzerland"}

]

const drivers = [

    {id: 1, name: "Max Verstappen", team: "Red Bull Racing"},
    {id: 2, name: "Liam Lawson", team: "Red Bull Racing"},
    {id: 3, name: "Charles Leclerc", team: "Ferrari"},
    {id: 4, name: "Lewis Hamilton", team: "Ferrari"},
    {id: 5, name: "George Russell", team: "Mercedes"},
    {id: 6, name: "Kimi Antonelli", team: "Mercedes"},
    {id: 7, name: "Lando Norris", team: "McLaren"},
    {id: 8, name: "Oscar Piastri", team: "McLaren"},
    {id: 9, name: "Fernando Alonso", team: "Aston Martin"},
    {id: 10, name: "Lance Stroll", team: "Aston Martin"},
    {id: 11, name: "Jack Doohan", team: "Alpine"},
    {id: 12, name: "Pierre Gasly", team: "Alpine"},
    {id: 13, name: "Gabriel Bortoleto", team: "Stake F1 Team Kick Sauber"},
    {id: 14, name: "Nico Hulkenberg", team: "Stake F1 Team Kick Sauber"},
    {id: 15, name: "Yuki Tsunoda", team: "Visa Cash App RB"},
    {id: 16, name: "Isaak Hadjar", team: "Visa Cash App RB"},
    {id: 17, name: "Oliver Bearman", team: "Haas"},
    {id: 18, name: "Esteban Ocon", team: "Haas"},
    {id: 19, name: "Alexander Albon", team: "Williams"},
    {id: 20, name: "Carlos Sainz", team: "Williams"}


]

server.get("/teams", async (request, response)=>{
    response.type("application/json").code(200)

    return {teams}
})

interface DriversParams{
    id: string
}
server.get("/drivers", async (request, response)=>{
    response.type("application/json").code(200)

    return {drivers}
})

server.get<{Params: DriversParams}>("/drivers/:id", async (request, response)=>{
    const id = parseInt(request.params.id)
    const driver = drivers.find( d => d.id === id )
    
    if(!driver){
        response.type("application/json").code(404)
        return { message: "Driver Not Found"}
        
    }else{
        response.type("application/json").code(200)
        return {driver}
    }
})
// const porta: number = process.env.PORT

server.listen({port: 3333}, ()=> {
    console.log("Server Init")
})