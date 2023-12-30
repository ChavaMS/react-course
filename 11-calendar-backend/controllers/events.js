const Evento = require('../models/Evento');
const { response } = require('express');


const getEventos = async (req, res = response) => {
    try {
        const eventos = await Evento.find({}).populate('user', 'name');

        return res.status(200).json({
            ok: true,
            eventos
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error al obtener los eventos'
        });
    }
}

const crearEvento = async (req, res) => {
    try {
        const evento = new Evento(req.body);

        evento.user = req.uid;
        const eventoGuardado = await evento.save();

        return res.status(200).json({
            ok: true,
            evento: eventoGuardado
        })

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error al crear el evento'
        });
    }
}

const actualizarEvento = async (req, res) => {
    try {
        const eventoId = req.params.id;
        const uid = req.uid;

        const evento = await Evento.findById(eventoId);

        if (!evento) {
            return res.status(404).json({
                ok: false,
                msg: 'El evento no existe'
            });
        }

        if (evento.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No pudes editar el evento'
            });
        }

        const nuevoEvento = { ...req.body, user: uid };
        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento, { new: true });

        return res.json({
            ok: true,
            evento: eventoActualizado
        })


    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error al actualizar el evento'
        });
    }
}

const eliminarEvento = async (req, res) => {
    try {
        const eventoId = req.params.id;
        const uid = req.uid;

        const evento = await Evento.findById(eventoId);

        if (!evento) {
            return res.status(404).json({
                ok: false,
                msg: 'El evento no existe'
            });
        }

        if (evento.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No pudes borrar el evento'
            });
        }

        await Evento.findByIdAndDelete(eventoId);

        return res.json({
            ok: true,
        })


    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error al borrar el evento'
        });
    }
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}