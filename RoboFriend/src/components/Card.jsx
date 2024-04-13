const Card = ({id, name, email}) => {
  return (
    <div className="bg-yellow-200 text-center w-56 rounded-lg p-6 shadow-xl border-2 border-yellow-400 hover:scale-105 transition duration-500 ease-in-out">
        <img src={`https://robohash.org/${id}${name}?200x200`} alt="photo" className="bg-slate-200 rounded-xl shadow-lg border-2 border-yellow-100"/>
        <div className="mt-6">
            <h2 className="font-semibold text-xl font-mono text-gray-600">{name}</h2>
            <p className="text-[0.8rem] font-mono text-gray-800">{email}</p>
        </div>
    </div>
  )
}

export default Card