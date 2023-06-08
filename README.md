If you want first to check readme about **React** check this link https://github.com/Dacili/GraphQL/blob/master/GraphQLwithReact/GraphQLwithReact/ClientApp/src/README.md

## About app
- Application is created using **React 18** for the frontend part,  
- and **.Net Core .NET 7** for the backend.  
- **Rsuite** UI library is used for components.   
- **Apollo client** is used in React for Graph QL. Use it to fetch, cache, and modify application data, all while automatically updating your UI. 
- **Hot chocolate** - open-source GraphQL server for the Microsoft .NET Platform.  
#### URLs:  
- Url for the frontend is: https://localhost:44419/  
- for the backend https://localhost:7277/  
- for the Graph QL https://localhost:7277/graphql/  
   
The test app is about doing CRUD operations on some of the masjids from Sarajevo. 💜  <br/> <br/>
For setting up the backend project I was following this blog https://www.c-sharpcorner.com/article/graphql-introduction-and-product-application-using-net-core-7/   
And for the react graph-ql I was following mostly official documentation: https://www.apollographql.com/docs/react/data/queries

# GraphQL
Is a query language for API.  
**Queries:** to get the data. (R in CRUD)  
**Mutations:** to mutate data (CUD in CRUD)    
-*Over-fetching:* you get more data than you actually need.  
Ex: you have object of 30 properties. For the specific UI, you only need Id, and Name of that object. So instead of getting only that 2 properties, you get 30.  
-*Under-fetching:* you get less data than you actually need. Opposite of over-fetching.  
GraphQL gives clients the power to ask for exactly what they need so they can avoid over-fetching or under-fetching.

On this url (https://localhost:7277/graphql/), you can play with GraphQL:  


https://github.com/Dacili/GraphQL/assets/37112852/83530685-196a-4c48-8d57-a7c89161253f

Demo of app:  


https://github.com/Dacili/GraphQL/assets/37112852/eb64b0a1-c1ef-4813-9db3-908d728d1e44




# GraphQL vs REST
- While typical REST APIs require loading from multiple URLs, GraphQL APIs get all the data your app needs in a single request (you can nest queries, or mutations in 1 request).   
- With GraphQL we're avoiding over-fetching or under-fetching (it's very good for mobile), in REST we would have to create different APIs to cover all needs.  
- REST is more established and enjoys widespread support. It’s easier to find more tools, integration, and infrastructure for a more specialized project.


#### All examples of queries and mutations  
Ids are generated every time, so make sure you're using existing Ids..
```
query {
  allMasjids{
    id,
  name,
  city
  }
}


query {
   masjidById(id:"d6c9e423-4a6f-45aa-b312-ab4541c6c4d9"){
    id,
  name,
  city
  }
}


we can do nesting, multiple queries (or mutations) in 1 request:
query {
  allMasjids{
    id,
  name,
  city
  },
  masjidById(id:"d6c9e423-4a6f-45aa-b312-ab4541c6c4d9"){
    id,
  name,
  city
  }

}


mutation($masjidToAdd: MasjidInput!) {
   createMasjid(masjid:$masjidToAdd){
    id, name
   }
}
variable:
{
  "masjidToAdd":{
    "id":"5bed484d-bbe6-439d-bfd4-22ab877410aa",
    "name":"Hotell Hills masjid",
    "city":"Sarajevo"
}  
}


mutation($masjidToAdd: MasjidInput!) {
   updateMasjid(masjid:$masjidToAdd){
    id, name, city
   }
}
variable
{
  "masjidToAdd":{
    "id":"5bed484d-bbe6-439d-bfd4-22ab877410aa",
    "name":"Hotell Hills masjid",
    "city":"Sarajevo"
}  
}

mutation($id: UUID!) {
   deleteMasjid 
    ( id:$id){
      name
    }
}
variable
{
  "id":"06cab730-6a16-4eca-9cb0-f9406cada013"
}
```
