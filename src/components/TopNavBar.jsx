import { Navbar, Container, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function TopNavBar() {

    // 변수에 useNavigate()훅을 담아서 사용, 페이지 이동을 도와주는 함수(Hook)
    let navigate = useNavigate();

    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* useNavigate를 이용하여 페이지 이동
                - navigate(1)의 경우 앞으로 한 페이지를 이동하는것을 의미함, -면 뒤로
            */}
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default TopNavBar;