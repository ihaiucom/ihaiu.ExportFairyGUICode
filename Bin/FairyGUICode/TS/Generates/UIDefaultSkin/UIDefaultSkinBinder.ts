/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import LoginPanel from "../../Extends/UIDefaultSkin/LoginPanel";
import RedButton from "../../Extends/UIDefaultSkin/RedButton";
import HelpButton from "../../Extends/UIDefaultSkin/HelpButton";
import TextInput from "../../Extends/UIDefaultSkin/TextInput";
import KeyValueInput from "../../Extends/UIDefaultSkin/KeyValueInput";
import RightArrow from "../../Extends/UIDefaultSkin/RightArrow";
import ComButtonNormal from "../../Extends/UIDefaultSkin/ComButtonNormal";
import ComButtonCheck from "../../Extends/UIDefaultSkin/ComButtonCheck";
import ComButtonRadio from "../../Extends/UIDefaultSkin/ComButtonRadio";
import ComLabel from "../../Extends/UIDefaultSkin/ComLabel";
import ComComboBox_item from "../../Extends/UIDefaultSkin/ComComboBox_item";
import ComComboBox_popup from "../../Extends/UIDefaultSkin/ComComboBox_popup";
import ComComboBox from "../../Extends/UIDefaultSkin/ComComboBox";
import ComScrollBar_arrow1 from "../../Extends/UIDefaultSkin/ComScrollBar_arrow1";
import ComScrollBar_arrow2 from "../../Extends/UIDefaultSkin/ComScrollBar_arrow2";
import ComScrollBar_grip from "../../Extends/UIDefaultSkin/ComScrollBar_grip";
import ComScrollBar from "../../Extends/UIDefaultSkin/ComScrollBar";
import ComProgressBar from "../../Extends/UIDefaultSkin/ComProgressBar";
import Slider1_grip from "../../Extends/UIDefaultSkin/Slider1_grip";
import Slider1 from "../../Extends/UIDefaultSkin/Slider1";
import PopupMenu1_item from "../../Extends/UIDefaultSkin/PopupMenu1_item";
import PopupMenu1 from "../../Extends/UIDefaultSkin/PopupMenu1";
import TestText from "../../Extends/UIDefaultSkin/TestText";
import TestGroup from "../../Extends/UIDefaultSkin/TestGroup";
import TestList from "../../Extends/UIDefaultSkin/TestList";
import TestCom from "../../Extends/UIDefaultSkin/TestCom";
import CC from "../../Extends/UIDefaultSkin/CC";
import TestClass_Name from "../../Extends/UIDefaultSkin/TestClass_Name";
import TestName from "../../Extends/UIDefaultSkin/TestName";
import TestOtherPackageImage from "../../Extends/UIDefaultSkin/TestOtherPackageImage";

export default class UIDefaultSkinBinder
{
	public static bindAll():void 
	{
		let bind = fairygui.UIObjectFactory.setPackageItemExtension;
		bind(LoginPanel.URL, LoginPanel);
		bind(RedButton.URL, RedButton);
		bind(HelpButton.URL, HelpButton);
		bind(TextInput.URL, TextInput);
		bind(KeyValueInput.URL, KeyValueInput);
		bind(RightArrow.URL, RightArrow);
		bind(ComButtonNormal.URL, ComButtonNormal);
		bind(ComButtonCheck.URL, ComButtonCheck);
		bind(ComButtonRadio.URL, ComButtonRadio);
		bind(ComLabel.URL, ComLabel);
		bind(ComComboBox_item.URL, ComComboBox_item);
		bind(ComComboBox_popup.URL, ComComboBox_popup);
		bind(ComComboBox.URL, ComComboBox);
		bind(ComScrollBar_arrow1.URL, ComScrollBar_arrow1);
		bind(ComScrollBar_arrow2.URL, ComScrollBar_arrow2);
		bind(ComScrollBar_grip.URL, ComScrollBar_grip);
		bind(ComScrollBar.URL, ComScrollBar);
		bind(ComProgressBar.URL, ComProgressBar);
		bind(Slider1_grip.URL, Slider1_grip);
		bind(Slider1.URL, Slider1);
		bind(PopupMenu1_item.URL, PopupMenu1_item);
		bind(PopupMenu1.URL, PopupMenu1);
		bind(TestText.URL, TestText);
		bind(TestGroup.URL, TestGroup);
		bind(TestList.URL, TestList);
		bind(TestCom.URL, TestCom);
		bind(CC.URL, CC);
		bind(CC.URL, CC);
		bind(TestClass_Name.URL, TestClass_Name);
		bind(TestName.URL, TestName);
		bind(TestOtherPackageImage.URL, TestOtherPackageImage);
	}
}