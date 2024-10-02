import Nav from './Nav';

export default function Header(props) {
    console.log(props);
    return (
        <header className='border'>
            <h1 className='display-1'>Kenneth Wagner, Developer</h1>
            <div className='justify-content-right'>
                <Nav />
            </div>
        </header>
    );
}