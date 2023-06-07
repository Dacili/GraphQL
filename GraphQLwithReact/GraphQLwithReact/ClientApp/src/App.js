import React, { Component, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import MediCard from './components/MediCard'
import { useQuery, gql, ApolloClient, InMemoryCache, ApolloProvider,useMutation} from "@apollo/client"; 
import 'rsuite/dist/rsuite.min.css';
import { Form, ButtonToolbar, Button, Input, Table } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

export function MediBtn(propsMedi) {
    //export function MediBtn({ rename }) {
    const [counter, setMediCounter] = useState(0)
    function handleMediClick(param) {
        setMediCounter(counter+1)
        //alert('I\'m clicked woohooo '+param)
    }
    return (
        <div>
        <button onClick={() => handleMediClick('jel proslo')}>Medi btn here</button>
            <p>button is clicked {counter} times</p>
            <button onClick={() => propsMedi.rename('novo ime')}>rename app title</button>
            {/*<button onClick={() => rename('novo ime')}>rename app title</button>*/}
        </div>
            )
    //return (<button onClick={handleMediClick}>Medi btn here</button>)
}

const user = {
    name: 'Neki lik',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};


const getAllMasjidsQuery = gql`{allMasjids{
    id,
  name,
  city,
country,
address
  }}`;

const updateMasjidMutation = gql`mutation($masjid: MasjidInput!) {
   updateMasjid(masjid:$masjid){
    id, name, city
   }
}`;

export default function App() {
  let [displayName, setDisplayName]=useState( 'Prvo ime');
    let [selectedMasjid, setSelectedMasjid] = useState();

    function renameTitle(newName) {
        setDisplayName(newName)
       //displayName = newName
    }
    const { data, refetch } = useQuery(getAllMasjidsQuery) // we actually have object of elements,
    // so if we want specific property of that object we can put name of that property in curly brackets,
    // it will immediately assign that property, so you will not have to index 1 more additional time in jsx
    //const { loading, error, data } = useQuery(getAllMasjidsQuery) // getting multiple properties

    const masjidsData = useQuery(getAllMasjidsQuery) // if we don't use {} curly brackets,
    // then in jsx we will have to access it this way: masjidsData?.data?.allMasjids?.map...
    // we have additional indexing

    const [updateMasjid] = useMutation(updateMasjidMutation
        //,
        //{
        //onSuccess: ({ data }) => {
        //    refetch();
        //},
        //}
    );

    function showMasjids() {
        console.log(data)
    }

    function editMasjid(masjid) {
        masjid = masjid.rowData;
        console.log(masjid)
        setSelectedMasjid(masjid);
    }
    return (
       
        < >
         
            <h1>Medi learning React js again hehe</h1>
            <br></br>
           
           
            <Table
                height={400}
                data={data?.allMasjids}
            >
                <Column width={160} align="center" fixed>
                    <HeaderCell>Id</HeaderCell>
                    <Cell dataKey="id" />
                </Column>

                <Column width={200}>
                    <HeaderCell> Name</HeaderCell>
                    <Cell dataKey="name" />
                </Column>

                <Column width={150}>
                    <HeaderCell>City</HeaderCell>
                    <Cell dataKey="city" />
                </Column>

                <Column width={100}>
                    <HeaderCell>Country</HeaderCell>
                    <Cell dataKey="country" />
                </Column>

                <Column width={100}>
                    <HeaderCell>Address</HeaderCell>
                    <Cell dataKey="address" />
                </Column>

              
                <Column width={80} fixed="right">
                    <HeaderCell>...</HeaderCell>

                    <Cell style={{ padding: '6px' }}>
                        {rowData => (
                            <Button appearance="link" onClick={() => editMasjid({ rowData })}>
                                Edit
                            </Button>
                        )}
                    </Cell>
                </Column>
            </Table>

            <Form style={{ marginLeft: "30px" }}>
                <h2 style={{marginTop: "-100px"} }>Masjid form</h2><br></br>
                <Form.Group controlId="name">
                    <Form.ControlLabel>Name</Form.ControlLabel>
                    <Form.Control name="name" value={selectedMasjid?.name}
                        onChange={(event) => {
                            console.log(event)
                            //let copyOfMasjid = { ...selectedMasjid };
                            //copyOfMasjid.name = event;
                            //console.log(copyOfMasjid)
                            //setSelectedMasjid(copyOfMasjid);
                            setSelectedMasjid({
                                ...selectedMasjid,           // copy all other key-value pairs of food object
                               name: event
                            }
                                
                          );
                    }} />
                    <Form.HelpText>Name is required</Form.HelpText>
                </Form.Group>
                <Form.Group controlId="city">
                    <Form.ControlLabel>City</Form.ControlLabel>
                    <Form.Control name="city" value={selectedMasjid?.city}
                        onChange={(event) => {
                            setSelectedMasjid({
                                ...selectedMasjid,      
                                city: event
                            }

                            );
                        }} />
                </Form.Group>
                <Form.Group controlId="country">
                    <Form.ControlLabel>Country</Form.ControlLabel>
                    <Form.Control name="country" value={selectedMasjid?.country}
                        onChange={(event) => {
                            setSelectedMasjid({
                                ...selectedMasjid,
                                country: event
                            }

                            );
                        }} />
                </Form.Group>
                <Form.Group controlId="address">
                    <Form.ControlLabel>Address</Form.ControlLabel>
                    <Form.Control name="address" value={selectedMasjid?.address}
                        onChange={(event) => {
                            setSelectedMasjid({
                                ...selectedMasjid,
                                address: event
                            }

                            );
                        }} />
                </Form.Group>
            
              
                <Form.Group>
                    <ButtonToolbar>
                        <Button appearance="primary" onClick={e => {
                            e.preventDefault();
                            updateMasjid({ variables: { masjid: selectedMasjid } }).then(x =>  refetch());
                           
                            }
                        }>Submit</Button>
                        <Button appearance="default">Cancel</Button>
                    </ButtonToolbar>
                </Form.Group>
            </Form>
   
            <div style={{ height: "700px" }}></div>
            <h1>{displayName}</h1>
         <MediCard txt="this is my first card"></MediCard>
           <MediBtn rename={renameTitle}></MediBtn>
            <MediBtn></MediBtn>
           <h3>ođe ide ime usera {user.name}</h3> 

            <Layout>
                <Routes>
                    {AppRoutes.map((route, index) => {
                        const { element, ...rest } = route;
                        return <Route key={index} {...rest} element={element} />;
                    })}
                </Routes>
            </Layout>
          
        </>
    );
} /*  <ApolloProvider client={apolloClient}>*/
            {/* </ApolloProvider>*/}