import styled from 'styled-components'

const Page = styled.div`
  padding: 10px;
  background: #f4dada;
`

const Navigation = styled.div`
  padding: 3px;
  background: #f6eec7;
  margin: 5px;
`

const Notice = styled.div`
  background: #ffb6b9;
  font-size: 20px;
  border-style: solid;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`

const Button = styled.button`
  background-color: #ffb6b9;
  border: none;
  padding: 3px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 1px;
`

const BlogDiv = styled.div`
  border-style: double;
  padding: 5px;
  border-radius: 10px;
  border-color: #ffb6b9;
  margin: 3px;
`

const Input = styled.input`
  margin: 0.25em;
`

export { Page, Navigation, Notice, Button, BlogDiv, Input }