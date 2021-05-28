import React from 'react'
import Box from '../../components/Box';
import { Container } from './styles';
import { AFERITION } from '../../utils/enums'
const image = '../../assets/afericao_peso.png';

const MeasurementTechniques = () => {
    return (
        <Container>
            <Box>
                <div>
                As Informações apresentadas nesta página foram retiradas da "APOSTILA AVALIAÇÃO NUTRICIONAL (PUC - GOIÁS)" disponível <a href='http://professor.pucgoias.edu.br/SiteDocente/admin/arquivosUpload/14052/material/Apostila%20Avalia%C3%A7%C3%A3o%20Nutricional.pdf'>Neste Link</a> <br/>
                </div>
                <br/>
                {console.log(image)}
                {AFERITION.map((technique) =>(
                    <div>
                    <li key={technique.image}>
                        <h3>{technique.title}</h3>
                        <img src={image} alt=""/>
                    </li>
                        <br/>
                        {technique.text.map((lines) => (
                            <li key = {lines.id} >
                                {lines}
                            </li>
                            ))}
                        <br/>
                    </div>
                ))}
            </Box>
        </Container>
    );
};

export default MeasurementTechniques;