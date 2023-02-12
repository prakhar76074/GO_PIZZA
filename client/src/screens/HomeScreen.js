import React, { useEffect } from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import Pizza from '../components/Pizza'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaAction'
import Loader from '../components/Loader'
import Error from '../components/Error'
import Filters from '../components/Filters'
// jab bhi frontent ki help se req bhejna hai redux ki help se we use useDispatch
//and if we want data from redux state we use useSelector

function HomeScreen() {

  
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;


  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <>
      <Container>
      
                  {loading ? (<Loader />)
                  :error ? (<Error>Error while fetching pizzas {error}</Error>)
                  : (<Row>
                    <Filters />
                  {pizzas.map(pizza => (
                    <Col md={4}>
                      <Pizza pizza={pizza} />
                    </Col>
                  ))}
                </Row>)}
       
     
        
      </Container>

    </>
  )
}

export default HomeScreen