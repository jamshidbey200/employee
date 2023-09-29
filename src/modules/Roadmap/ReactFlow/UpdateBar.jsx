import { Button, Stack, Switch } from '@chakra-ui/react';
import cls from './style.module.scss';
import TextEditor from './TextEditor';

function UpdateBar({ currentItem, setChangePosition }) {
	return (
		<div className={cls.updatenode__controls}>
			<label className={cls.title}>Javascript nima?</label>
			<input className={cls.textarea} />
			<div>
				<p className={cls.description}>For description</p>
				<TextEditor />

				<p className={cls.description}>Text place for link:</p>
				<ul className={cls.links}>
					<li className={cls.link}>
						<a href="#">Link 1</a>
					</li>
					<li className={cls.link}>
						<a href="#">Link 2</a>
					</li>
					<li className={cls.link}>
						<a href="#">Link 3</a>
					</li>
				</ul>
			</div>
			<div className={cls.updatePosition}>
				<p className={cls.switchText}>Positions:</p>
				<Stack align="center" direction="row">
					<div onClick={() => setChangePosition(currentItem)}>
						<Switch size="lg" />
					</div>
				</Stack>
			</div>
			<div>
				<p className={cls.submitBtnText}>Help others learn by submitting links to learn more about this topic</p>
				<Button width="100%">Submit a Link</Button>
			</div>
		</div>
	);
}

export default UpdateBar;
