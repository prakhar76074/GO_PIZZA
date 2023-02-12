import React , {useEffect} from 'react'
import { Row,Col , Container , ButtonGroup , Button } from 'react-bootstrap'
import {Route, Switch} from 'react-router-dom'
import AddNewPizza from '../components/Admin/AddNewPizza'
import OrderList from '../components/Admin/OrderList'
import PizzasList from '../components/Admin/PizzasList'
import UserList from '../components/Admin/UserList'
import { useDispatch , useSelector } from 'react-redux'
import EditPizza from '../components/Admin/EditPizza'
const AdminScreen = ({history}) => {
    const userState = useSelector(state => state.loginUserReducer)
    const {currentUser} = userState

    useEffect(() => {
       if(localStorage.getItem('currentUser')===null || !currentUser.isAdmin){
           window.location.href='/'
       }
    },[])
  return (
   <>
   <Container>
   <Row>
       <h1 >Admin Panel</h1>
       <Col md={4}>
       <ButtonGroup vertical>
      <Button onClick={() => history.push('/admin/userlist')}>All Users</Button>
      <Button onClick={() => history.push('/admin/pizzalist')}>All Pizzas</Button>

     
      <Button onClick={() => history.push('/admin/addnewpizza')}>Add new Pizzas</Button>
      <Button onClick={() => history.push('/admin/orderlist')}>All orders</Button>

      
    </ButtonGroup>
       </Col>
       <Col md={8}>
           <Switch>
           <Route path='/admin' component={UserList} exact />
               <Route path='/admin/userlist' component={UserList} exact />
               <Route path='/admin/pizzalist' component={PizzasList} exact />
               <Route path='/admin/addnewpizza' component={AddNewPizza} exact />
               <Route path='/admin/orderlist' component={OrderList} exact />
               <Route path='/admin/editpizza/:pizzaId' component={EditPizza} exact />
           </Switch>
       </Col>
   </Row>
   </Container>
   </>
  )
}

export default AdminScreen