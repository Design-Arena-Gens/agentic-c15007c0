export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: 'white',
      padding: '20px'
    }}>
      <main style={{
        textAlign: 'center',
        maxWidth: '800px'
      }}>
        <h1 style={{
          fontSize: '4rem',
          marginBottom: '1rem',
          fontWeight: '700',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
        }}>
          Welcome
        </h1>
        <p style={{
          fontSize: '1.5rem',
          marginBottom: '2rem',
          opacity: 0.9
        }}>
          Your application is live and running
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button style={{
            padding: '12px 32px',
            fontSize: '1.1rem',
            background: 'white',
            color: '#667eea',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s'
          }}>
            Get Started
          </button>
          <button style={{
            padding: '12px 32px',
            fontSize: '1.1rem',
            background: 'transparent',
            color: 'white',
            border: '2px solid white',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'transform 0.2s'
          }}>
            Learn More
          </button>
        </div>
      </main>
    </div>
  );
}
