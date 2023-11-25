export const Sidebar = () => {
  return (
    <div>
      <nav className="bg-bubble-gum p-4 flex items-center justify-between">
        <div>
          <h1 className="text-white text-xl font-semibold"></h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-white">Bienvenido</span>
          <i className="fas fa-user-circle text-white text-2xl"></i>
        </div>
      </nav>
      <div className="grid grid-cols-3">
        <aside className="bg-bubble-gum text-white w-64 min-h-screen p-4">
          <nav>
            <ul className="space-y-2">
              <li className="opcion-con-desplegable">
                <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                  <div className="flex items-center">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    <span></span>
                  </div>
                  <i className="fas fa-chevron-down text-xs"></i>
                </div>
                <ul className="desplegable ml-4 hidden">
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-gray-700 items-center"
                    >
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-gray-700 items-center"
                    >
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="opcion-con-desplegable">
                <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                  <div className="flex items-center">
                    <i className="fas fa-money-bill-wave mr-2"></i>
                  </div>
                  <i className="fas fa-chevron-down text-xs"></i>
                </div>
                <ul className="desplegable ml-4 hidden">
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-gray-700 items-center"
                    >
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-gray-700 items-center"
                    >
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-gray-700 items-center"
                    >
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="opcion-con-desplegable">
                <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                  <div className="flex items-center">
                    <i className="fas fa-chart-bar mr-2"></i>
                    <span></span>
                  </div>
                  <i className="fas fa-chevron-down text-xs"></i>
                </div>
                <ul className="desplegable ml-4 hidden">
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-gray-700 items-center"
                    >
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-gray-700 items-center"
                    >
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="opcion-con-desplegable">
                <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                  <div className="flex items-center">
                    <i className="fas fa-file-alt mr-2"></i>
                  </div>
                  <i className="fas fa-chevron-down text-xs"></i>
                </div>
                <ul className="desplegable ml-4 hidden">
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-gray-700 items-center"
                    >
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-gray-700 items-center"
                    >
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </aside>
        <p>columna 2</p>
        <p>columna 3</p>
      </div>
    </div>
  );
};
