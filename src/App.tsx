import './App.css'

function App() {
  return (
    <>
      <main className="main">
        <h1>DÁP DS example</h1>
        <div>
          <dap-ds-button>Open</dap-ds-button>
          <dap-ds-modal
            title="This is a title"
            description="Description of the modal">
          </dap-ds-modal>
        </div>
        <div>
          <dap-ds-badge>Default Badge</dap-ds-badge>
        </div>
        <div>
          <dap-ds-banner>You have a new package!</dap-ds-banner>
        </div>
        <div>
          <dap-ds-accordion-group>
            <dap-ds-accordion>
                <span slot="heading">First accordion</span>
                <dap-ds-typography variant="body" size="md">
                  Firrrst Nam ultricies justo magna, id scelerisque mauris tempus
                  non. Curabitur viverra nulla leo, a rutrum nisi porta a. Duis tempor
                  enim lorem, vestibulum facilisis tortor pharetra quis.
                </dap-ds-typography>
            </dap-ds-accordion>
            <dap-ds-accordion>
              <span slot="heading">Second accordion</span>
              <dap-ds-typography variant="body" size="md">
                Second Nam ultricies justo magna, id scelerisque mauris tempus
                non. Curabitur viverra nulla leo, a rutrum nisi porta a. Duis tempor
                enim lorem, vestibulum facilisis tortor pharetra quis.
              </dap-ds-typography>
            </dap-ds-accordion>
          </dap-ds-accordion-group>
        </div>
      </main>
    </>
  )
}

export default App
