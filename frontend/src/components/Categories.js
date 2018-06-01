import React, { Component } from 'react'
import '../App.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCategories } from '../actions/categories'
import { getPostsByCategory } from '../actions/posts'
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'

class Categories extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render(){
    const { categories } = this.props
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>Readable</NavbarBrand>
          {categories.map(category => (
            <Nav className='nav' key={category.name}>
              <NavItem className='nav-item' key={category.name}>
                <Link to={`/${category.name}`} onClick={() => this.props.getPostsByCategory(category.name)}>{category.name}</Link>
              </NavItem>
            </Nav>
          ))}
        </Navbar>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = { fetchCategories, getPostsByCategory }

export default connect(mapStateToProps,mapDispatchToProps)(Categories)
