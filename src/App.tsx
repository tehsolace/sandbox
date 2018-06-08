import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";
import './css/App.css'
import './css/blueprint-overrides.css'

import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import {
	Alignment,
	Button,
	ButtonGroup,
	FormGroup,
	Intent,
	Menu,
	MenuItem,
	Navbar,
	NavbarDivider,
	NavbarGroup,
	NavbarHeading,
	Popover,
	PopoverInteractionKind,
	Position,
	Tooltip
} from '@blueprintjs/core';

import Sandbox from "./scenes/sandbox";

FormGroup.DEFAULT_REQUIRED_CONTENT = (
	<span className="required-label">
		{FormGroup.DEFAULT_REQUIRED_CONTENT}
	</span>
);

class App extends React.Component {
	public render() {
		const contentMenu = (
			<Menu>
				<MenuItem text="Application Preferences" />
				<MenuItem text="Layout Options" />
				<MenuItem text="Scheduler" />
			</Menu>
		);

		return (
			<>
				<Navbar fixedToTop={true}>
					<NavbarGroup>
						<NavbarHeading>Sandbox</NavbarHeading>
					</NavbarGroup>
					<NavbarGroup align={Alignment.RIGHT}>
						<Button minimal={true} icon="home" text="Home" />
						<NavbarDivider />
						<ButtonGroup minimal={true} large={true}>
							<Tooltip content="User Profile" position={Position.BOTTOM}>
								<Button icon="user" />
							</Tooltip>
							<Popover content={contentMenu} interactionKind={PopoverInteractionKind.HOVER} position={Position.BOTTOM_RIGHT}>
								<Button minimal={true} icon="cog" />
							</Popover>
						</ButtonGroup>
						<NavbarDivider />
						<Tooltip content="Log Out" position={Position.BOTTOM} intent={Intent.DANGER}>
							<Button minimal={true} large={true} icon="log-out" intent={Intent.DANGER} />
						</Tooltip>
					</NavbarGroup>
				</Navbar>
				<main>
					<BrowserRouter>
						<Route component={Sandbox} />
					</BrowserRouter>
				</main>
			</>
		);
	}
}

export default App;
