import React from 'react';
import logements from '../logements.json';

function Logements() {
    return (
        <div style={styles.container}>
            {logements.map(logement => (
                <div key={logement.id} style={styles.logementCard}>
                    <img src={logement.cover} alt={logement.title} style={styles.image} />
                    <h2 style={styles.title}>{logement.title}</h2>
                    <p style={styles.location}>{logement.location}</p>
                    {/* Vous pouvez ajouter plus de détails ici si nécessaire */}
                </div>
            ))}
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'start',
    },
    logementCard: {
        border: '1px solid #ddd',
        padding: '15px',
        margin: '15px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '300px', // Ajustez la largeur selon vos besoins
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '8px',
    },
    title: {
        fontWeight: 'bold',
    },
    location: {
        // Styles pour la localisation
    },
    // Ajoutez d'autres styles si nécessaire
};

export default Logements;
