import { db } from './src/lib/db'

async function seed() {
  try {
    console.log('🌱 Starting database seeding...')

    // Create users
    const marcus = await db.user.create({
      data: {
        name: 'Marcus Aurelius',
        email: 'marcus@imperium.rome',
        role: 'emperor',
        avatar: 'MA'
      }
    })

    const julius = await db.user.create({
      data: {
        name: 'Julius Caesar',
        email: 'julius@imperium.rome',
        role: 'centurion',
        avatar: 'JC'
      }
    })

    const augustus = await db.user.create({
      data: {
        name: 'Augustus Octavian',
        email: 'augustus@imperium.rome',
        role: 'centurion',
        avatar: 'AO'
      }
    })

    const cicero = await db.user.create({
      data: {
        name: 'Cicero',
        email: 'cicero@imperium.rome',
        role: 'senator',
        avatar: 'CI'
      }
    })

    const spartacus = await db.user.create({
      data: {
        name: 'Spartacus',
        email: 'spartacus@imperium.rome',
        role: 'citizen',
        avatar: 'SP'
      }
    })

    const maximus = await db.user.create({
      data: {
        name: 'Maximus Decimus',
        email: 'maximus@imperium.rome',
        role: 'citizen',
        avatar: 'MD'
      }
    })

    console.log('✅ Users created')

    // Create projects
    const project1 = await db.project.create({
      data: {
        title: 'Roman Portal Development',
        description: 'Building the main portal for the Roman Empire',
        status: 'active',
        priority: 'high',
        startDate: new Date('2024-01-01'),
        endDate: new Date('2024-02-15'),
        members: {
          create: [
            { userId: marcus.id, role: 'emperor' },
            { userId: julius.id, role: 'lead' },
            { userId: augustus.id, role: 'member' },
            { userId: cicero.id, role: 'member' }
          ]
        }
      }
    })

    const project2 = await db.project.create({
      data: {
        title: 'Empire Security Audit',
        description: 'Comprehensive security audit of all imperial systems',
        status: 'active',
        priority: 'critical',
        startDate: new Date('2024-01-15'),
        endDate: new Date('2024-01-30'),
        members: {
          create: [
            { userId: marcus.id, role: 'emperor' },
            { userId: julius.id, role: 'lead' },
            { userId: maximus.id, role: 'member' }
          ]
        }
      }
    })

    const project3 = await db.project.create({
      data: {
        title: 'Legion Training Platform',
        description: 'Digital platform for training new legionnaires',
        status: 'planning',
        priority: 'medium',
        startDate: new Date('2024-02-01'),
        endDate: new Date('2024-03-01'),
        members: {
          create: [
            { userId: marcus.id, role: 'emperor' },
            { userId: augustus.id, role: 'lead' },
            { userId: spartacus.id, role: 'member' },
            { userId: maximus.id, role: 'member' },
            { userId: cicero.id, role: 'member' }
          ]
        }
      }
    })

    console.log('✅ Projects created')

    // Create tasks
    await db.task.createMany({
      data: [
        {
          title: 'Design authentication system',
          description: 'Create secure login system for the portal',
          status: 'completed',
          priority: 'high',
          projectId: project1.id,
          assigneeId: julius.id,
          createdById: marcus.id,
          startDate: new Date('2024-01-01'),
          dueDate: new Date('2024-01-10')
        },
        {
          title: 'Implement user dashboard',
          description: 'Build the main user interface',
          status: 'in_progress',
          priority: 'high',
          projectId: project1.id,
          assigneeId: augustus.id,
          createdById: marcus.id,
          startDate: new Date('2024-01-05'),
          dueDate: new Date('2024-01-20')
        },
        {
          title: 'Security vulnerability assessment',
          description: 'Identify and document all security vulnerabilities',
          status: 'in_progress',
          priority: 'critical',
          projectId: project2.id,
          assigneeId: maximus.id,
          createdById: julius.id,
          startDate: new Date('2024-01-15'),
          dueDate: new Date('2024-01-25')
        },
        {
          title: 'Deploy security patches',
          description: 'Apply all identified security patches',
          status: 'todo',
          priority: 'critical',
          projectId: project2.id,
          assigneeId: julius.id,
          createdById: marcus.id,
          startDate: new Date('2024-01-20'),
          dueDate: new Date('2024-01-30')
        },
        {
          title: 'Create training curriculum',
          description: 'Design comprehensive training materials',
          status: 'todo',
          priority: 'medium',
          projectId: project3.id,
          assigneeId: cicero.id,
          createdById: marcus.id,
          startDate: new Date('2024-02-01'),
          dueDate: new Date('2024-02-15')
        },
        {
          title: 'Build practice arena',
          description: 'Create virtual training environment',
          status: 'todo',
          priority: 'medium',
          projectId: project3.id,
          assigneeId: spartacus.id,
          createdById: augustus.id,
          startDate: new Date('2024-02-10'),
          dueDate: new Date('2024-02-25')
        }
      ]
    })

    console.log('✅ Tasks created')

    // Create some comments
    const tasks = await db.task.findMany()
    if (tasks.length > 0) {
      await db.comment.createMany({
        data: [
          {
            content: 'Excellent work on the authentication system!',
            taskId: tasks[0].id,
            authorId: marcus.id
          },
          {
            content: 'Need to add two-factor authentication',
            taskId: tasks[0].id,
            authorId: cicero.id
          },
          {
            content: 'Making good progress on the dashboard',
            taskId: tasks[1].id,
            authorId: augustus.id
          }
        ]
      })
    }

    console.log('✅ Comments created')

    // Create notifications
    await db.notification.createMany({
      data: [
        {
          title: 'New Task Assigned',
          message: 'You have been assigned to: Design authentication system',
          type: 'task_assigned',
          userId: julius.id
        },
        {
          title: 'Project Update',
          message: 'Roman Portal Development has been updated',
          type: 'project_updated',
          userId: marcus.id
        },
        {
          title: 'New Comment',
          message: 'Cicero commented on your task',
          type: 'comment_added',
          userId: julius.id
        }
      ]
    })

    console.log('✅ Notifications created')
    console.log('🎉 Database seeding completed successfully!')

  } catch (error) {
    console.error('❌ Error seeding database:', error)
    process.exit(1)
  } finally {
    await db.$disconnect()
  }
}

seed()