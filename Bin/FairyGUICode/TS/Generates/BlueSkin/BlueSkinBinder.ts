/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import ScrollBar_arrow from "../../Extends/BlueSkin/ScrollBar_arrow.ts";
import ScrollBar_grip from "../../Extends/BlueSkin/ScrollBar_grip.ts";
import WindowCloseButton from "../../Extends/BlueSkin/WindowCloseButton.ts";
import Button from "../../Extends/BlueSkin/Button.ts";
import Checkbox from "../../Extends/BlueSkin/Checkbox.ts";
import RadioButton from "../../Extends/BlueSkin/RadioButton.ts";
import InputTextField from "../../Extends/BlueSkin/InputTextField.ts";
import InputTextArea from "../../Extends/BlueSkin/InputTextArea.ts";
import SliderH from "../../Extends/BlueSkin/SliderH.ts";
import Button_icon from "../../Extends/BlueSkin/Button_icon.ts";
import SliderV from "../../Extends/BlueSkin/SliderV.ts";
import ProgressBar from "../../Extends/BlueSkin/ProgressBar.ts";
import ComboBox from "../../Extends/BlueSkin/ComboBox.ts";
import WindowFrame from "../../Extends/BlueSkin/WindowFrame.ts";
import Button_icon_text from "../../Extends/BlueSkin/Button_icon_text.ts";
import TabButton from "../../Extends/BlueSkin/TabButton.ts";
import ScrollBarH from "../../Extends/BlueSkin/ScrollBarH.ts";
import ScrollBarV from "../../Extends/BlueSkin/ScrollBarV.ts";

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