import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
	return (
		<form className="space-y-6">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="space-y-2">
					<Label htmlFor="name">Name</Label>
					<Input id="name" placeholder="Your name" />
				</div>
				<div className="space-y-2">
					<Label htmlFor="email">Email</Label>
					<Input id="email" type="email" placeholder="Your email" />
				</div>
			</div>
			<div className="space-y-2">
				<Label htmlFor="phone">Phone</Label>
				<Input id="phone" type="tel" placeholder="Your phone number" />
			</div>
			<div className="space-y-2">
				<Label htmlFor="message">Message</Label>
				<Textarea
					id="message"
					placeholder="Tell us about your project"
					rows={5}
				/>
			</div>
			<Button type="submit" className="w-full md:w-auto">
				Send Message
			</Button>
		</form>
	);
}
