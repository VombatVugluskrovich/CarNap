interface ServiceCardProps {
  caption: string;
  url: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ caption, url, imageUrl }) => {
  return (
    <div 
      className="d-flex flex-column align-items-center justify-content-between p-4 shadow" 
      style={{ 
        width: '320px', 
        height: '350px', 
        backgroundColor: '#002e4d', // Фирменный темно-синий цвет
        color: 'white',
        textAlign: 'center'
      }}
    >
      {/* Иконка (Лупа с шестеренкой) */}
      <div className="mt-3">
        <img 
          src="/images/icon-diagnostic.png" 
          alt="Diagnostic Icon" 
          style={{ width: '80px', filter: 'brightness(0) invert(1)' }} 
        />
      </div>

      {/* Разделительная линия */}
      <hr style={{ width: '80%', borderTop: '2px solid white', opacity: 1 }} />

      {/* Текстовый блок в рамке */}
      <div 
        className="d-flex align-items-center justify-content-center p-3 mb-3" 
        style={{ 
          border: '2px solid white', 
          width: '100%',
          minHeight: '80px'
        }}
      >
        <h5 className="fw-bold m-0 text-uppercase" style={{ fontSize: '1.1rem', letterSpacing: '1px' }}>
          {caption}
        </h5>
      </div>
    </div>
  );
};
export default ServiceCard;