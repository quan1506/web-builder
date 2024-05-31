import { usePageBuilderStore } from "../../hooks";
import PageSettings from "../page-settings";
import "./settingsPanel.css";

const SETTINGS_COMPONENT_MAP = {};

const SettingsPanel = () => {
  const selectedElement = usePageBuilderStore((state) =>
    state.selectedElementId
      ? state.document[state.selectedElementId]
      : state.document[state.rootElementId]
  );
  const SettingsComponent = selectedElement?.isRoot
    ? PageSettings
    : SETTINGS_COMPONENT_MAP[selectedElement?.type];

  const settingsTitle = selectedElement
    ? `${selectedElement.isRoot ? "Page" : selectedElement.type} Settings`
    : "Settings";

  return (
    <div className="settings-panel-container">
      <div className="settings-title-container">
        <p className="settings-title">{settingsTitle}</p>
      </div>
      <div className="settings-container">
        {SettingsComponent && <SettingsComponent element={selectedElement} />}
      </div>
    </div>
  );
};

export default SettingsPanel;
