export default function MLAlgorithmFlowchart() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">
          ¿Cómo escoger un algoritmo de Machine Learning?
        </h1>

        <p className="text-center text-slate-300 mb-12 text-lg">
          Guía visual rápida para elegir modelos según el tipo de problema y datos.
        </p>

        <div className="flex justify-center mb-12">
          <div className="bg-indigo-600 px-8 py-5 rounded-3xl shadow-2xl text-center">
            <h2 className="text-2xl font-bold">¿Qué quieres hacer?</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* REGRESIÓN */}
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-xl">
            <div className="bg-blue-500 rounded-2xl p-4 mb-6 text-center">
              <h2 className="text-2xl font-bold">Regresión</h2>
              <p className="text-sm mt-1">Predecir números</p>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-800 rounded-xl p-4">
                <p className="font-semibold mb-2">Ejemplos:</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Precio de casas</li>
                  <li>• Ventas</li>
                  <li>• Temperatura</li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="font-semibold text-green-400 mb-2">Relación simple / lineal</p>
                <div className="bg-slate-700 rounded-lg p-3 text-center font-mono">
                  Linear Regression
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="font-semibold text-yellow-400 mb-2">Relación compleja</p>
                <div className="space-y-2">
                  <div className="bg-slate-700 rounded-lg p-3 text-center font-mono">
                    Random Forest
                  </div>
                  <div className="bg-slate-700 rounded-lg p-3 text-center font-mono">
                    XGBoost
                  </div>
                  <div className="bg-slate-700 rounded-lg p-3 text-center font-mono">
                    LightGBM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CLASIFICACIÓN */}
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-xl">
            <div className="bg-emerald-500 rounded-2xl p-4 mb-6 text-center">
              <h2 className="text-2xl font-bold">Clasificación</h2>
              <p className="text-sm mt-1">Predecir categorías</p>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-800 rounded-xl p-4">
                <p className="font-semibold mb-2">Ejemplos:</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Spam / no spam</li>
                  <li>• Fraude</li>
                  <li>• Gato / perro</li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="font-semibold text-green-400 mb-2">Necesitas interpretar</p>
                <div className="bg-slate-700 rounded-lg p-3 text-center font-mono">
                  Logistic Regression
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="font-semibold text-yellow-400 mb-2">Mayor precisión</p>
                <div className="space-y-2">
                  <div className="bg-slate-700 rounded-lg p-3 text-center font-mono">
                    Random Forest
                  </div>
                  <div className="bg-slate-700 rounded-lg p-3 text-center font-mono">
                    XGBoost
                  </div>
                  <div className="bg-slate-700 rounded-lg p-3 text-center font-mono">
                    Neural Networks
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CLUSTERING */}
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-xl">
            <div className="bg-pink-500 rounded-2xl p-4 mb-6 text-center">
              <h2 className="text-2xl font-bold">Clustering</h2>
              <p className="text-sm mt-1">Descubrir grupos</p>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-800 rounded-xl p-4">
                <p className="font-semibold mb-2">Ejemplos:</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Segmentación clientes</li>
                  <li>• Detectar patrones</li>
                  <li>• Agrupar usuarios</li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="font-semibold text-cyan-400 mb-2">Algoritmos típicos</p>
                <div className="space-y-2">
                  <div className="bg-slate-700 rounded-lg p-3 text-center font-mono">
                    K-Means
                  </div>
                  <div className="bg-slate-700 rounded-lg p-3 text-center font-mono">
                    DBSCAN
                  </div>
                  <div className="bg-slate-700 rounded-lg p-3 text-center font-mono">
                    Hierarchical Clustering
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TIPOS DE DATOS */}
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-12 shadow-xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Según el tipo de datos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 rounded-2xl p-5">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Tablas / CSV</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• XGBoost</li>
                <li>• Random Forest</li>
                <li>• LightGBM</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-2xl p-5">
              <h3 className="text-xl font-bold text-pink-400 mb-3">Imágenes</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• CNN</li>
                <li>• Deep Learning</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-2xl p-5">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">Texto</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Transformers</li>
                <li>• BERT</li>
                <li>• GPT</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-2xl p-5">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Series temporales</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• ARIMA</li>
                <li>• Prophet</li>
                <li>• LSTM</li>
              </ul>
            </div>
          </div>
        </div>

        {/* REGLA DE ORO */}
        <div className="bg-gradient-to-r from-indigo-700 to-purple-700 rounded-3xl p-8 text-center shadow-2xl">
          <h2 className="text-3xl font-bold mb-6">Regla de oro</h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm md:text-base">
            <div className="bg-black/20 rounded-2xl p-4">
              <p className="font-bold text-2xl mb-2">1</p>
              <p>Empieza simple</p>
            </div>

            <div className="bg-black/20 rounded-2xl p-4">
              <p className="font-bold text-2xl mb-2">2</p>
              <p>Crea un baseline</p>
            </div>

            <div className="bg-black/20 rounded-2xl p-4">
              <p className="font-bold text-2xl mb-2">3</p>
              <p>Evalúa métricas</p>
            </div>

            <div className="bg-black/20 rounded-2xl p-4">
              <p className="font-bold text-2xl mb-2">4</p>
              <p>Prueba modelos más complejos</p>
            </div>

            <div className="bg-black/20 rounded-2xl p-4">
              <p className="font-bold text-2xl mb-2">5</p>
              <p>Quédate con el mejor equilibrio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
