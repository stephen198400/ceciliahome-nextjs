'use client';

import { useEffect, useRef, useState } from 'react';

// 定义统计数据类型
type StatItem = {
	value: string;
	label: string;
	description: string;
	// 添加数值属性，用于动画
	numericValue: number;
	suffix?: string; // 比如 '%', '+', 'K+' 等
};

// 统计数据
const stats: StatItem[] = [
	{
		value: '20+',
		numericValue: 20,
		suffix: '+',
		label: 'Years of Experience',
		description:
			'Expert structural design and architectural innovation for California homes.',
	},
	{
		value: '1000+',
		numericValue: 1000,
		suffix: '+',
		label: 'Projects Completed',
		description:
			'Successful residential and commercial projects throughout California.',
	},
	{
		value: '185K+',
		numericValue: 185,
		suffix: 'K+',
		label: 'Square Meters Transformed',
		description:
			'Converting spaces into beautiful, functional, and sustainable environments.',
	},
	{
		value: '95%',
		numericValue: 95,
		suffix: '%',
		label: 'Permit Approval Rate',
		description:
			'Expert designs ensuring high first-time building permit approval success.',
	},
];

// 数字计数动画组件
function AnimatedCounter({
	targetValue,
	suffix = '',
	duration = 2000, // 动画持续时间，毫秒
}: {
	targetValue: number;
	suffix?: string;
	duration?: number;
}) {
	const [count, setCount] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const counterRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		// 创建Intersection Observer
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !isVisible) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 } // 当10%的元素可见时触发
		);

		// 捕获当前ref值
		const currentRef = counterRef.current;

		// 监听元素
		if (currentRef) {
			observer.observe(currentRef);
		}

		// 清理
		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [isVisible]);

	useEffect(() => {
		// 只有当元素可见时才启动动画
		if (!isVisible) return;

		let startTime: number | null = null;
		let animationFrameId: number;

		// 动画函数
		const animateCount = (timestamp: number) => {
			if (!startTime) startTime = timestamp;
			const progress = timestamp - startTime;
			const percentage = Math.min(progress / duration, 1);

			// 使用easeOutQuad缓动函数使动画更自然
			const easeOutPercentage = 1 - (1 - percentage) * (1 - percentage);

			// 计算当前值
			const currentValue = Math.floor(easeOutPercentage * targetValue);
			setCount(currentValue);

			// 如果动画未完成，继续
			if (percentage < 1) {
				animationFrameId = requestAnimationFrame(animateCount);
			}
		};

		// 开始动画
		animationFrameId = requestAnimationFrame(animateCount);

		// 清理
		return () => {
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
			}
		};
	}, [isVisible, targetValue, duration]);

	return (
		<h3 ref={counterRef} className="text-5xl font-bold mb-2 transition-all">
			{count}
			{suffix}
		</h3>
	);
}

export function States() {
	return (
		<section className="py-16 bg-[#FFFDF7]">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{stats.map((stat, index) => (
						<div
							key={index}
							className="transform transition-transform duration-300 hover:translate-y-[-5px]"
						>
							<AnimatedCounter
								targetValue={stat.numericValue}
								suffix={stat.suffix}
							/>
							<h4 className="text-xl font-semibold text-gray-900 mb-2">
								{stat.label}
							</h4>
							<p className="text-gray-600">{stat.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
