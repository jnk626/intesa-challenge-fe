import { MovimentoDTO } from "../../model/movimentodto"
import PropTypes from 'prop-types'

interface MovementCardProps {
    movimento: MovimentoDTO
}

export default function MovementCard( { movimento }: MovementCardProps ) {
    return (
        <>
        <div className="overflow-card">
            <p>placeholder icon</p>
            <p>{movimento.tipologia}</p>
            <p>{movimento.ammontare}</p>
            <p>{movimento.data}</p>
        </div>
        </>
    )
}

MovementCard.propTypes = {
    movimento: PropTypes.instanceOf(MovimentoDTO)
}
