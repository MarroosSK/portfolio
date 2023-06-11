import { AboutMeBrief, ContactBrief, Hero, ProjectGallerySlider, Title } from '../../components'

const Home = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
    
        <Hero/>
        <Title name="Working with" word="about" titleSide="left"/>
        <AboutMeBrief/>
        <Title name="Worked on" word="projects" titleSide="right"/>
        <ProjectGallerySlider/>
        <Title name="Work with me" word="contact"/>
        <ContactBrief/>
    </div>
  )
}

export default Home