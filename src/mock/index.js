import Mock from "mockjs"
import token from './data/login.json'
import products from './data/products.json'

Mock.mock('/mock/login', {
  code: 200,
  data: token
})

Mock.mock('/mock/products', {
  code: 200,
  data: products
})