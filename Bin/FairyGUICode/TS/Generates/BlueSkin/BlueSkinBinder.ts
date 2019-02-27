/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import ScrollBar_arrow from "../../Extends/BlueSkin/ScrollBar_arrow";
import ScrollBar_grip from "../../Extends/BlueSkin/ScrollBar_grip";
import WindowCloseButton from "../../Extends/BlueSkin/WindowCloseButton";
import Button from "../../Extends/BlueSkin/Button";
import Checkbox from "../../Extends/BlueSkin/Checkbox";
import RadioButton from "../../Extends/BlueSkin/RadioButton";
import InputTextField from "../../Extends/BlueSkin/InputTextField";
import InputTextArea from "../../Extends/BlueSkin/InputTextArea";
import SliderH from "../../Extends/BlueSkin/SliderH";
import Button_icon from "../../Extends/BlueSkin/Button_icon";
import SliderV from "../../Extends/BlueSkin/SliderV";
import ProgressBar from "../../Extends/BlueSkin/ProgressBar";
import ComboBox from "../../Extends/BlueSkin/ComboBox";
import WindowFrame from "../../Extends/BlueSkin/WindowFrame";
import Button_icon_text from "../../Extends/BlueSkin/Button_icon_text";
import TabButton from "../../Extends/BlueSkin/TabButton";
import ScrollBarH from "../../Extends/BlueSkin/ScrollBarH";
import ScrollBarV from "../../Extends/BlueSkin/ScrollBarV";

export default class BlueSkinBinder
{
	public static bindAll():void 
	{
		let bind = fairygui.UIObjectFactory.setPackageItemExtension;
		bind(ScrollBar_arrow.URL, ScrollBar_arrow);
		bind(ScrollBar_grip.URL, ScrollBar_grip);
		bind(WindowCloseButton.URL, WindowCloseButton);
		bind(Button.URL, Button);
		bind(Checkbox.URL, Checkbox);
		bind(RadioButton.URL, RadioButton);
		bind(InputTextField.URL, InputTextField);
		bind(InputTextArea.URL, InputTextArea);
		bind(SliderH.URL, SliderH);
		bind(Button_icon.URL, Button_icon);
		bind(SliderV.URL, SliderV);
		bind(ProgressBar.URL, ProgressBar);
		bind(ComboBox.URL, ComboBox);
		bind(WindowFrame.URL, WindowFrame);
		bind(Button_icon_text.URL, Button_icon_text);
		bind(TabButton.URL, TabButton);
		bind(ScrollBarH.URL, ScrollBarH);
		bind(ScrollBarV.URL, ScrollBarV);
	}
}