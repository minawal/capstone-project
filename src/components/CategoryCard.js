import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function CategoryCard({
  categoryLink,
  id,
  categoryIcon,
  categoryTitle,
  categoryIconAltText,
}) {
  return (
    <Card to={categoryLink} key={id}>
      <Wrapper>
        <Icon src={categoryIcon} alt={categoryIconAltText} />
        <Category>{categoryTitle}</Category>
      </Wrapper>
    </Card>
  )
}

CategoryCard.propTypes = {
  id: PropTypes.string,
  categoryIcon: PropTypes.string,
  categoryIconAltText: PropTypes.string,
  categoryTitle: PropTypes.string,
}

const Card = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 150px;
  width: 150px;
  background-color: #eee;
  color: #000;
  text-decoration: none;
  border: 0;
`

const Icon = styled.img`
  width: 40px;
  height: auto;
`

const Wrapper = styled.div`
  display: block;
  text-align: center;
`

const Category = styled.h2`
  font-size: 14px;
  margin-bottom: 0;
`
