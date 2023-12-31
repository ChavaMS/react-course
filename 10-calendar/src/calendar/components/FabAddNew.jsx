import { addHours } from "date-fns";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { useUiStore } from "../../hooks/useUiStore"

export const FabAddNew = () => {

    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore()

    const handleClickView = () => {
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours(new Date(), 2),
            bgColor: '#fafafa',
            user: {
                _id: '1234',
                name: 'Salvador'
            }
        });
        openDateModal();
    }

    return (
        <button className="btn btn-primary fab" onClick={handleClickView}>
            <i className="fas fa-plus"></i>
        </button>
    )
}
