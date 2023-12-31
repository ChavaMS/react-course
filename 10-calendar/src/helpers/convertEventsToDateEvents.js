import { parseISO } from "date-fns";

export const convertEventsToDateEvents = (eventos = []) => {
    return eventos.map(evento => {
        evento.start = parseISO(evento.start);
        evento.end = parseISO(evento.end);
        return evento;
    })
}
