import { IService } from '../type'

const ServiceCard: React.FC<{
  service: IService
}> = ({ service: { Icon, name, description } }) => {
  const createMarkup = () => {
    return {
      __html: description,
    }
  }
  return (
    <div className="flex items-center p-2 space-x-4 ">
      <Icon className="w-32 h-32 text-customBlack" />
      <div>
        <h4 className="mb-1 text-xl font-bold">{name} </h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  )
}

export default ServiceCard
