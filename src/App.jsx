import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import content from './data/content.json'

function ParticleField() {
  return (
    <Points />
  )
}

function Points() {
  const count = 3000
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  
  const colorOptions = [
    [0.98, 0.8, 0.08],
    [0.66, 0.33, 0.97],
    [0.93, 0.28, 0.6]
  ]
  
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 100
    positions[i + 1] = (Math.random() - 0.5) * 100
    positions[i + 2] = (Math.random() - 0.5) * 50
    
    const color = colorOptions[Math.floor(Math.random() * colorOptions.length)]
    colors[i] = color[0]
    colors[i + 1] = color[1]
    colors[i + 2] = color[2]
  }
  
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        blending={1}
      />
    </points>
  )
}

function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(250, 204, 21, 0.08) 0%, transparent 40%),
            linear-gradient(180deg, #0a0a0f 0%, #0f0f1a 100%)
          `
        }}
      />
      <Canvas camera={{ position: [0, 0, 40], fov: 75 }}>
        <color attach="background" args={['#0a0a0f']} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <ParticleField />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}

function Header({ activeSection, setActiveSection }) {
  const [menuOpen, setMenuOpen] = useState(false)
  
  const navItems = ['inicio', 'temas', 'sintaxis', 'ejercicios', 'test']
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ background: 'rgba(10, 10, 15, 0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(168, 85, 247, 0.2)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <i className="fas fa-code text-2xl text-purple-500"></i>
            <div>
              <h1 className="text-2xl font-bold rick-gradient">PYTHON</h1>
              <p className="text-xs text-gray-400">Guia de Programacion</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            {navItems.map(item => (
              <a
                key={item}
                href={`#${item}`}
                className="nav-link capitalize"
              >
                {item}
              </a>
            ))}
          </div>
          
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </nav>
        
        {menuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            {navItems.map(item => (
              <a
                key={item}
                href={`#${item}`}
                className="text-white py-2 capitalize"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 rick-card mb-10 animate-in">
          <i className="fas fa-rocket text-yellow-400"></i>
          <span className="text-lg font-medium text-white">Aprende Python desde cero</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display animate-in delay-100">
          <span className="rick-gradient">PROGRAMACION</span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto animate-in delay-200">
          Domina los conceptos fundamentales de Python con ejemplos practicos y ejercicios interactivos
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in delay-300">
          <a href="#temas" className="portal-btn">
            <i className="fas fa-play mr-2"></i>Comenzar
          </a>
          <a href="#sintaxis" className="portal-btn-outline">
            <i className="fas fa-code mr-2"></i>Ver Codigo
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-in delay-300">
          <div className="stat-card">
            <div className="stat-number text-yellow-400">{content.stats.exercises}</div>
            <div className="text-gray-400 text-sm mt-2">Ejercicios</div>
          </div>
          <div className="stat-card">
            <div className="stat-number text-purple-400">{content.stats.topics}</div>
            <div className="text-gray-400 text-sm mt-2">Temas</div>
          </div>
          <div className="stat-card">
            <div className="stat-number text-pink-400">{content.stats.sections}</div>
            <div className="text-gray-400 text-sm mt-2">Secciones</div>
          </div>
          <div className="stat-card">
            <div className="stat-number text-white">{content.stats.free}</div>
            <div className="text-gray-400 text-sm mt-2">Gratis</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Topics() {
  const colorClasses = {
    yellow: 'text-yellow-400 border-yellow-400 bg-yellow-400/10',
    purple: 'text-purple-400 border-purple-400 bg-purple-400/10',
    pink: 'text-pink-400 border-pink-400 bg-pink-400/10'
  }
  
  return (
    <section id="temas">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span className="rick-gradient">TEMAS PRINCIPALES</span>
          </h2>
          <p className="text-gray-400">Los conceptos que necesitas dominar</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.topics.map((topic, index) => (
            <div 
              key={topic.id} 
              className={`rick-card animate-in ${index === 0 ? '' : index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : ''}`}
            >
              <div className={`icon-box ${colorClasses[topic.color]}`}>
                <i className={`fas ${topic.icon}`}></i>
              </div>
              <h3 className={`text-xl font-bold mb-2 font-display ${
                topic.color === 'yellow' ? 'text-yellow-400' : 
                topic.color === 'purple' ? 'text-purple-400' : 'text-pink-400'
              }`}>
                {topic.id}. {topic.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{topic.description}</p>
              <div className="flex gap-2">
                {topic.tags.map(tag => (
                  <span key={tag} className="portal-badge">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Syntax() {
  const [activeTab, setActiveTab] = useState('variables')
  const tabs = ['variables', 'operadores', 'condicionales', 'for', 'while', 'funciones', 'listas', 'diccionarios', 'poo']
  
  const colorClasses = {
    variables: 'text-yellow-400',
    operadores: 'text-purple-400',
    condicionales: 'text-pink-400',
    for: 'text-yellow-400',
    while: 'text-purple-400',
    funciones: 'text-pink-400',
    listas: 'text-yellow-400',
    diccionarios: 'text-purple-400',
    poo: 'text-pink-400'
  }
  
  const examples = content.codeExamples[activeTab] || []
  
  return (
    <section id="sintaxis" style={{ background: 'rgba(0,0,0,0.3)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span className="rick-gradient">SINTAXIS Y CODIGO</span>
          </h2>
          <p className="text-gray-400">Ejemplos practicos de cada tema</p>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`portal-tab capitalize ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {examples.map((example, index) => (
            <div key={index} className="rick-card">
              <h3 className={`text-lg font-bold mb-4 font-display ${colorClasses[activeTab]}`}>
                <i className={`fas ${
                  activeTab === 'variables' ? 'fa-database' :
                  activeTab === 'operadores' ? 'fa-calculator' :
                  activeTab === 'condicionales' ? 'fa-code-branch' :
                  activeTab === 'for' ? 'fa-redo' :
                  activeTab === 'while' ? 'fa-bolt' :
                  activeTab === 'funciones' ? 'fa-cogs' :
                  activeTab === 'listas' ? 'fa-list' :
                  activeTab === 'diccionarios' ? 'fa-map' :
                  'fa-shapes'
                } mr-2`}></i>
                {example.title}
              </h3>
              <div className="portal-code">
                <div className="portal-code-header">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: '#ef4444' }}></div>
                    <div className="w-3 h-3 rounded-full" style={{ background: '#eab308' }}></div>
                    <div className="w-3 h-3 rounded-full" style={{ background: '#22c55e' }}></div>
                  </div>
                  <span className="text-gray-400 text-xs ml-4">{example.filename}</span>
                </div>
                <div className="portal-code-body">
                  <pre className="text-sm"><code>{example.code}</code></pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Exercises() {
  const colorClasses = ['text-yellow-400', 'text-purple-400', 'text-pink-400', 'text-yellow-400', 'text-purple-400', 'text-pink-400']
  
  return (
    <section id="ejercicios">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span className="rick-gradient">EJERCICIOS PRACTICOS</span>
          </h2>
          <p className="text-gray-400">Pon a prueba tus conocimientos</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.exercises.map((exercise, index) => (
            <div key={exercise.level} className="rick-card">
              <span className="portal-badge mb-3">Nivel {exercise.level}</span>
              <h3 className={`text-lg font-bold mb-2 font-display ${colorClasses[index]}`}>
                {exercise.level}. {exercise.title}
              </h3>
              <p className="text-gray-400 text-sm">{exercise.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Quiz() {
  const [answers, setAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)
  
  const handleSelect = (questionIndex, optionIndex) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: optionIndex }))
  }
  
  const checkAnswers = () => {
    setShowResult(true)
  }
  
  const resetQuiz = () => {
    setAnswers({})
    setShowResult(false)
  }
  
  const score = Object.keys(answers).filter(key => 
    content.quiz[key].correct === answers[key]
  ).length
  
  const getOptionClass = (questionIndex, optionIndex) => {
    if (!showResult) {
      return answers[questionIndex] === optionIndex ? 'selected' : ''
    }
    
    const question = content.quiz[questionIndex]
    if (optionIndex === question.correct) return 'correct'
    if (answers[questionIndex] === optionIndex) return 'incorrect'
    return ''
  }
  
  return (
    <section id="test" style={{ background: 'rgba(0,0,0,0.3)' }}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span className="rick-gradient">TEST DE CONOCIMIENTO</span>
          </h2>
          <p className="text-gray-400">Responde las preguntas y verifica tu aprendizaje</p>
        </div>
        
        <div className="space-y-6">
          {content.quiz.map((q, i) => (
            <div key={i} className="rick-card">
              <h4 className="text-base font-semibold text-white mb-4 flex items-start gap-3">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {i + 1}
                </span>
                {q.question}
              </h4>
              <div className="space-y-3">
                {q.options.map((opt, j) => (
                  <div
                    key={j}
                    className={`quiz-option cursor-pointer ${getOptionClass(i, j)}`}
                    onClick={() => !showResult && handleSelect(i, j)}
                  >
                    <span className="option-marker"></span>
                    <span className="text-sm">{opt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button onClick={checkAnswers} className="portal-btn">
            <i className="fas fa-check mr-2"></i>Verificar Respuestas
          </button>
          <button onClick={resetQuiz} className="portal-btn-outline ml-4">
            <i className="fas fa-redo mr-2"></i>Reiniciar
          </button>
        </div>
        
        {showResult && (
          <div className="mt-8 text-center">
            <div className="rick-card inline-block px-8 py-6">
              <h3 className="text-2xl font-bold mb-2">Resultado</h3>
              <p className="text-4xl font-bold rick-gradient">{score}/{content.quiz.length}</p>
              <p className="text-gray-400 mt-2">
                {score >= 12 ? 'Excelente! Dominas Python perfectamente!' :
                 score >= 8 ? 'Muy bien! Tienes un buen conocimiento de Python.' :
                 score >= 5 ? 'Bien! Pero puedes mejorar practicando mas.' :
                 'Sigue estudiando! Repasa los temas basicos.'}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12" style={{ background: 'rgba(15, 15, 26, 0.8)', borderTop: '1px solid rgba(168, 85, 247, 0.2)' }}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <i className="fas fa-code text-2xl text-purple-500"></i>
          <span className="text-2xl font-bold rick-gradient font-display">PYTHON GUIDE</span>
        </div>
        <p className="text-gray-400 mb-2">Gabriel Pedreros</p>
        <p className="text-gray-500 text-sm">Aprende a programar con Python</p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Background />
      <Header />
      <main className="pt-16">
        <Hero />
        <Topics />
        <Syntax />
        <Exercises />
        <Quiz />
      </main>
      <Footer />
    </>
  )
}

export default App