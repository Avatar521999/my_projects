import Card from './Card'

const CardList = ({robots}) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {
        robots.map((robot) => (
          <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>
        ))
      }
    </div>
  )
}

export default CardList