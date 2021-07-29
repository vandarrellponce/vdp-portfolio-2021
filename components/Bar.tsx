import { Skill } from '../type'

const Bar: React.FC<{
  data: Skill
}> = ({ data: { Icon, level, name } }) => {
  return (
    <div className="text-gray-300 rounded-full bg-black4">
      <div
        className="flex items-center px-4 py-1 my-4 rounded-full text-white-300 bg-gradient-to-r from-red-600 to-black3"
        style={{ width: `${level}` }}
      >
        <Icon className="mr-3" />
        <div className="">{name}</div>
      </div>
    </div>
  )
}

export default Bar
