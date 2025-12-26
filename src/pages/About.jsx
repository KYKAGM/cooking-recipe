import React, { useState, useEffect } from 'react';
import Subscribe from '../components/subscribe/Subscribe';
const CulinaryNews = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const colors = {
        accent: '#ff611e',
        background: '#f6f1e7',
        text: '#2d2d2d',
        cardBg: '#ffffff'
    };

    useEffect(() => {
    const fetchNews = async () => {
        const API_KEY = '4e2972eb4a4b44fd899b33d6b0fc2147';
        const url = `https://newsapi.org/v2/everything?q=кулинария+OR+гастрономия+OR+рестораны&sortBy=publishedAt&language=ru&apiKey=${API_KEY}`;

        try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.articles) {
            setArticles(data.articles);
        }
        setLoading(false);
        } catch (error) {
        console.error("Ошибка загрузки новостей:", error);
        setLoading(false);
        }
    };

    fetchNews();
    }, []);

    return (
    <div style={{ 
        backgroundColor: colors.background, 
        minHeight: '100vh', 
        padding: '60px 20px', 
        fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        color: colors.text
    }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h1 style={{ 
            color: colors.accent, 
            fontSize: '3.5rem', 
            fontWeight: '900', 
            letterSpacing: '-1px',
            margin: '0 0 10px 0'
            }}>
            GASTRO NEWS
            </h1>
            <div style={{ 
            width: '60px', 
            height: '4px', 
            backgroundColor: colors.accent, 
            margin: '0 auto 20px' 
            }}></div>
            <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>Главные события в мире еды и индустрии</p>
        </header>

        {loading ? (
            <div style={{ textAlign: 'center', fontSize: '1.5rem', color: colors.accent }}>Приготовление ленты новостей...</div>
        ) : (
            <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
            gap: '40px' 
            }}>
            {articles.map((article, index) => (
                <article key={index} style={{ 
                backgroundColor: colors.cardBg, 
                borderRadius: '24px', 
                overflow: 'hidden', 
                display: 'flex', 
                flexDirection: 'column',
                boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease'
                }}>
                <div style={{ position: 'relative', height: '240px' }}>
                    <img 
                    src={article.urlToImage || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'} 
                    alt={article.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ 
                    position: 'absolute', 
                    top: '20px', 
                    left: '20px', 
                    backgroundColor: colors.accent, 
                    color: '#fff', 
                    padding: '5px 15px', 
                    borderRadius: '20px', 
                    fontSize: '0.8rem', 
                    fontWeight: 'bold' 
                    }}>
                    {article.source.name}
                    </div>
                </div>

                <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <h2 style={{ 
                    fontSize: '1.4rem', 
                    lineHeight: '1.3', 
                    marginBottom: '15px',
                    height: '3.6em',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    color: '#000'
                    }}>
                    {article.title}
                    </h2>
                    
                    <p style={{ 
                    color: '#555', 
                    fontSize: '1rem', 
                    lineHeight: '1.6',
                    marginBottom: '25px',
                    flexGrow: 1
                    }}>
                    {article.description ? article.description.slice(0, 120) + '...' : 'Нажмите кнопку ниже, чтобы узнать подробности этой новости.'}
                    </p>

                    <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                        display: 'inline-block',
                        backgroundColor: colors.accent,
                        color: '#fff',
                        textAlign: 'center',
                        padding: '16px 20px',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        boxShadow: `0 8px 20px -6px ${colors.accent}`,
                        transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = `0 12px 25px -6px ${colors.accent}`;
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = `0 8px 20px -6px ${colors.accent}`;
                    }}
                    >
                    Читать новость
                    </a>
                </div>
                </article>
            ))}
            </div>
        )}
        </div>
    </div>
    );
};


export default CulinaryNews;
