import React , {useState , useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { Form, Row , Col , Button } from 'react-bootstrap'
import { filterPizza } from '../actions/pizzaAction'

const Filters = () => {
    const dispatch = useDispatch()
    const [searchKey, setsearchKey] = useState()
    const [category, setcategory] = useState('all')

  return (
   <>
    <Form>
       <Row>
           <Col>
           <Form.Control
           value={searchKey}
           onChange={e => setsearchKey(e.target.value)}
            placeholder="Enter " />
           </Col>
           <Col>
           <select
              className="form-select"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
            >
              <option>All</option>
              <option>veg</option>
              <option>nonveg</option>
            </select>
           </Col>
           <Button onClick={() => {dispatch(filterPizza(searchKey,category))}}>
               Search
           </Button>
       </Row>
       
     
     
        
     
    </Form>
   </>
  )
}

export default Filters