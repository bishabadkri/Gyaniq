// Quiz Data Structure
const quizData = {
  os: {
    1: [
      // OS Set 1: Fundamentals (30 questions)
      {
        question: "Which of the following is NOT a function of an operating system?",
        options: ["Memory management", "Process management", "Device management", "Database management"],
        correctAnswer: "Database management",
      },
      {
        question: "What is the primary purpose of an operating system?",
        options: [
          "To provide a user interface",
          "To manage hardware resources",
          "To run application software",
          "To connect to the internet",
        ],
        correctAnswer: "To manage hardware resources",
      },
      {
        question: "Which scheduling algorithm is designed especially for time-sharing systems?",
        options: ["First-Come, First-Served", "Shortest Job First", "Round Robin", "Priority Scheduling"],
        correctAnswer: "Round Robin",
      },
      {
        question: "What is a deadlock in an operating system?",
        options: [
          "When a process is waiting for some event to occur",
          "When two or more processes are unable to proceed because each is waiting for resources held by others",
          "When a process terminates abnormally",
          "When the CPU is idle",
        ],
        correctAnswer:
          "When two or more processes are unable to proceed because each is waiting for resources held by others",
      },
      {
        question: "Which of the following is NOT a type of operating system?",
        options: [
          "Batch Operating System",
          "Multi-programming Operating System",
          "Distributed Operating System",
          "Compilation Operating System",
        ],
        correctAnswer: "Compilation Operating System",
      },
      {
        question: "What is virtual memory in operating systems?",
        options: [
          "A technique that allows execution of processes that may not be completely in memory",
          "Memory that is physically present in the computer",
          "Cache memory used by the CPU",
          "Memory used for storing temporary variables",
        ],
        correctAnswer: "A technique that allows execution of processes that may not be completely in memory",
      },
      {
        question: "Which component of the operating system is responsible for managing files?",
        options: ["Memory Manager", "Process Manager", "File System", "Device Driver"],
        correctAnswer: "File System",
      },
      {
        question: "What is a process in the context of operating systems?",
        options: ["A program in execution", "A program stored on disk", "A thread within a program", "A system call"],
        correctAnswer: "A program in execution",
      },
      {
        question: "Which of the following is an example of a real-time operating system?",
        options: ["Windows 10", "macOS", "VxWorks", "Ubuntu"],
        correctAnswer: "VxWorks",
      },
      {
        question: "What is the purpose of a device driver in an operating system?",
        options: [
          "To drive the hardware devices connected to the computer",
          "To provide an interface between the OS and hardware devices",
          "To manage the power supply to devices",
          "To encrypt data before sending it to devices",
        ],
        correctAnswer: "To provide an interface between the OS and hardware devices",
      },
      {
        question: "What is the difference between a thread and a process?",
        options: [
          "Threads share memory while processes do not",
          "Processes are faster than threads",
          "Threads cannot communicate with each other",
          "Processes use less resources than threads",
        ],
        correctAnswer: "Threads share memory while processes do not",
      },
      {
        question: "What is a system call?",
        options: [
          "A function call that requests a service from the kernel",
          "A call made by one process to another",
          "A call made by the hardware to the operating system",
          "A call made by the operating system to application software",
        ],
        correctAnswer: "A function call that requests a service from the kernel",
      },
      {
        question: "Which of the following is NOT a state of a process?",
        options: ["Running", "Ready", "Blocked", "Compiled"],
        correctAnswer: "Compiled",
      },
      {
        question: "What is the boot loader responsible for?",
        options: [
          "Loading the operating system into memory",
          "Creating new files on the disk",
          "Managing the file system",
          "Connecting to the internet",
        ],
        correctAnswer: "Loading the operating system into memory",
      },
      {
        question: "What is the purpose of the 'fork()' system call?",
        options: [
          "To create a new process",
          "To terminate a process",
          "To change the priority of a process",
          "To allocate memory",
        ],
        correctAnswer: "To create a new process",
      },
      {
        question: "What is a shell in an operating system?",
        options: [
          "A user interface to access operating system services",
          "The kernel of the operating system",
          "A hardware component",
          "A type of file system",
        ],
        correctAnswer: "A user interface to access operating system services",
      },
      {
        question: "Which of the following is NOT a scheduling criteria?",
        options: ["CPU utilization", "Throughput", "Turnaround time", "File size"],
        correctAnswer: "File size",
      },
      {
        question: "What is thrashing in an operating system?",
        options: [
          "A state where the system spends more time swapping pages than executing",
          "A type of virus that affects the operating system",
          "A method of encrypting data",
          "A technique to improve CPU performance",
        ],
        correctAnswer: "A state where the system spends more time swapping pages than executing",
      },
      {
        question: "What is the purpose of the 'nice' command in Unix/Linux?",
        options: [
          "To change the priority of a process",
          "To terminate a process",
          "To create a new process",
          "To display system information",
        ],
        correctAnswer: "To change the priority of a process",
      },
      {
        question: "What is a zombie process?",
        options: [
          "A process that has completed execution but still has an entry in the process table",
          "A process that is currently running",
          "A process that is waiting for an event to occur",
          "A process that has been terminated abnormally",
        ],
        correctAnswer: "A process that has completed execution but still has an entry in the process table",
      },
      {
        question: "What is the purpose of the 'ps' command in Unix/Linux?",
        options: [
          "To display information about active processes",
          "To pause a running process",
          "To start a new process",
          "To check the status of the file system",
        ],
        correctAnswer: "To display information about active processes",
      },
      {
        question: "What is the difference between preemptive and non-preemptive scheduling?",
        options: [
          "In preemptive scheduling, the CPU can be taken away from a process before it completes execution",
          "Non-preemptive scheduling is faster than preemptive scheduling",
          "Preemptive scheduling is only used in batch systems",
          "Non-preemptive scheduling is only used in real-time systems",
        ],
        correctAnswer:
          "In preemptive scheduling, the CPU can be taken away from a process before it completes execution",
      },
      {
        question: "What is the purpose of the 'kill' command in Unix/Linux?",
        options: [
          "To terminate a process",
          "To start a new process",
          "To change the priority of a process",
          "To display information about active processes",
        ],
        correctAnswer: "To terminate a process",
      },
      {
        question: "What is the difference between a hard link and a symbolic link?",
        options: [
          "A symbolic link can cross file system boundaries, a hard link cannot",
          "A hard link is faster than a symbolic link",
          "A symbolic link uses less disk space than a hard link",
          "A hard link can only be created by the root user",
        ],
        correctAnswer: "A symbolic link can cross file system boundaries, a hard link cannot",
      },
      {
        question: "What is the purpose of the 'chmod' command in Unix/Linux?",
        options: [
          "To change file permissions",
          "To change file ownership",
          "To create a new file",
          "To move a file to a different location",
        ],
        correctAnswer: "To change file permissions",
      },
      {
        question: "What is the purpose of the 'chown' command in Unix/Linux?",
        options: [
          "To change file ownership",
          "To change file permissions",
          "To create a new file",
          "To move a file to a different location",
        ],
        correctAnswer: "To change file ownership",
      },
      {
        question: "What is the purpose of the 'grep' command in Unix/Linux?",
        options: [
          "To search for patterns in files",
          "To sort the contents of a file",
          "To count the number of lines in a file",
          "To display the contents of a file",
        ],
        correctAnswer: "To search for patterns in files",
      },
      {
        question: "What is the purpose of the 'ls' command in Unix/Linux?",
        options: [
          "To list files and directories",
          "To display the contents of a file",
          "To change the current directory",
          "To create a new directory",
        ],
        correctAnswer: "To list files and directories",
      },
      {
        question: "What is the purpose of the 'cd' command in Unix/Linux?",
        options: [
          "To change the current directory",
          "To create a new directory",
          "To delete a directory",
          "To display the contents of a directory",
        ],
        correctAnswer: "To change the current directory",
      },
    ],
    2: [
      // OS Set 2: Process Management (30 questions)
      {
        question: "What is a process control block (PCB)?",
        options: [
          "A data structure that contains information about a process",
          "A hardware component that controls process execution",
          "A type of memory used by processes",
          "A software tool for monitoring processes",
        ],
        correctAnswer: "A data structure that contains information about a process",
      },
      {
        question: "Which of the following is NOT typically stored in a PCB?",
        options: ["Process ID", "Program Counter", "Register values", "Source code of the program"],
        correctAnswer: "Source code of the program",
      },
      {
        question: "What is context switching?",
        options: [
          "The process of saving the state of a process and loading the state of another",
          "Changing the priority of a process",
          "Moving a process from one CPU to another",
          "Converting the context of a program from one language to another",
        ],
        correctAnswer: "The process of saving the state of a process and loading the state of another",
      },
      {
        question: "What is the purpose of the scheduler in an operating system?",
        options: [
          "To determine which process runs next",
          "To allocate memory to processes",
          "To manage file systems",
          "To handle input/output operations",
        ],
        correctAnswer: "To determine which process runs next",
      },
      {
        question: "What is the difference between a long-term scheduler and a short-term scheduler?",
        options: [
          "Long-term scheduler selects which processes should be brought into the ready queue, short-term scheduler selects which process should be executed next",
          "Long-term scheduler is faster than short-term scheduler",
          "Short-term scheduler is used in batch systems, long-term scheduler is used in interactive systems",
          "Long-term scheduler is used for I/O-bound processes, short-term scheduler is used for CPU-bound processes",
        ],
        correctAnswer:
          "Long-term scheduler selects which processes should be brought into the ready queue, short-term scheduler selects which process should be executed next",
      },
      {
        question: "What is a thread?",
        options: [
          "A lightweight process that shares the same address space as the process that created it",
          "A heavy process that has its own address space",
          "A type of scheduling algorithm",
          "A type of memory management technique",
        ],
        correctAnswer: "A lightweight process that shares the same address space as the process that created it",
      },
      {
        question: "What is the advantage of using threads over processes?",
        options: [
          "Threads are more efficient because they share resources",
          "Threads are more secure because they have separate address spaces",
          "Threads are easier to create because they require less system calls",
          "Threads are more reliable because they are isolated from each other",
        ],
        correctAnswer: "Threads are more efficient because they share resources",
      },
      {
        question: "What is a race condition?",
        options: [
          "A situation where multiple processes access and manipulate shared data concurrently, and the outcome depends on the order of execution",
          "A condition where a process is running too fast",
          "A situation where two processes are competing for CPU time",
          "A condition where a process is waiting for an event that will never occur",
        ],
        correctAnswer:
          "A situation where multiple processes access and manipulate shared data concurrently, and the outcome depends on the order of execution",
      },
      {
        question: "What is a critical section?",
        options: [
          "A segment of code where shared resources are accessed",
          "A section of memory that cannot be modified",
          "A part of the operating system that is critical for its functioning",
          "A section of a program that has a high probability of causing errors",
        ],
        correctAnswer: "A segment of code where shared resources are accessed",
      },
      {
        question: "What is a semaphore?",
        options: [
          "A synchronization tool that can be used to control access to a common resource",
          "A type of process that runs in the background",
          "A hardware device used for inter-process communication",
          "A type of memory used for storing process information",
        ],
        correctAnswer: "A synchronization tool that can be used to control access to a common resource",
      },
      {
        question: "What is a mutex?",
        options: [
          "A synchronization tool that provides mutual exclusion",
          "A type of process that can execute multiple threads",
          "A hardware device used for inter-process communication",
          "A type of memory used for storing process information",
        ],
        correctAnswer: "A synchronization tool that provides mutual exclusion",
      },
      {
        question: "What is the difference between a binary semaphore and a mutex?",
        options: [
          "A binary semaphore can be used for signaling between threads, a mutex is used only for mutual exclusion",
          "A mutex can be used for signaling between threads, a binary semaphore is used only for mutual exclusion",
          "A binary semaphore can have only two values, a mutex can have any value",
          "A mutex can be used only by the thread that acquired it, a binary semaphore can be released by any thread",
        ],
        correctAnswer:
          "A binary semaphore can be used for signaling between threads, a mutex is used only for mutual exclusion",
      },
      {
        question: "What is the producer-consumer problem?",
        options: [
          "A synchronization problem where one process produces data and another consumes it",
          "A problem where the producer produces more data than the consumer can consume",
          "A problem where the consumer consumes data faster than the producer can produce",
          "A problem where the producer and consumer compete for CPU time",
        ],
        correctAnswer: "A synchronization problem where one process produces data and another consumes it",
      },
      {
        question: "What is the dining philosophers problem?",
        options: [
          "A synchronization problem that illustrates the challenges of avoiding deadlock and resource starvation",
          "A problem where philosophers compete for food",
          "A problem where philosophers compete for CPU time",
          "A problem where philosophers compete for memory",
        ],
        correctAnswer:
          "A synchronization problem that illustrates the challenges of avoiding deadlock and resource starvation",
      },
      {
        question: "What is a deadlock?",
        options: [
          "A situation where two or more processes are unable to proceed because each is waiting for resources held by others",
          "A situation where a process is waiting for an event that will never occur",
          "A situation where a process is using more resources than it should",
          "A situation where a process is terminated abnormally",
        ],
        correctAnswer:
          "A situation where two or more processes are unable to proceed because each is waiting for resources held by others",
      },
      {
        question: "What are the four necessary conditions for a deadlock to occur?",
        options: [
          "Mutual exclusion, hold and wait, no preemption, circular wait",
          "Mutual exclusion, hold and wait, preemption, circular wait",
          "Mutual inclusion, hold and wait, no preemption, circular wait",
          "Mutual exclusion, release and wait, no preemption, circular wait",
        ],
        correctAnswer: "Mutual exclusion, hold and wait, no preemption, circular wait",
      },
      {
        question: "What is the banker's algorithm used for?",
        options: ["Deadlock avoidance", "Deadlock prevention", "Deadlock detection", "Deadlock recovery"],
        correctAnswer: "Deadlock avoidance",
      },
      {
        question: "What is starvation in the context of process scheduling?",
        options: [
          "A situation where a process is perpetually denied necessary resources",
          "A situation where a process consumes too many resources",
          "A situation where a process is terminated due to lack of resources",
          "A situation where a process is waiting for an event that will never occur",
        ],
        correctAnswer: "A situation where a process is perpetually denied necessary resources",
      },
      {
        question: "What is aging in the context of process scheduling?",
        options: [
          "A technique to prevent starvation by gradually increasing the priority of processes that wait for a long time",
          "A technique to reduce the priority of processes as they age",
          "A technique to terminate processes that have been running for too long",
          "A technique to allocate more resources to older processes",
        ],
        correctAnswer:
          "A technique to prevent starvation by gradually increasing the priority of processes that wait for a long time",
      },
      {
        question: "What is a process state?",
        options: [
          "The current status of a process in the operating system",
          "The amount of memory allocated to a process",
          "The priority of a process",
          "The number of resources used by a process",
        ],
        correctAnswer: "The current status of a process in the operating system",
      },
      {
        question: "What is the purpose of the 'wait()' system call?",
        options: [
          "To wait for a child process to terminate",
          "To wait for a specific amount of time",
          "To wait for a resource to become available",
          "To wait for user input",
        ],
        correctAnswer: "To wait for a child process to terminate",
      },
      {
        question: "What is the purpose of the 'exec()' system call?",
        options: [
          "To replace the current process image with a new process image",
          "To create a new process",
          "To terminate a process",
          "To change the priority of a process",
        ],
        correctAnswer: "To replace the current process image with a new process image",
      },
      {
        question: "What is a daemon process?",
        options: [
          "A background process that is not associated with a terminal",
          "A process that has a higher priority than normal processes",
          "A process that has a lower priority than normal processes",
          "A process that is currently being executed by the CPU",
        ],
        correctAnswer: "A background process that is not associated with a terminal",
      },
      {
        question: "What is the init process in Unix/Linux?",
        options: [
          "The first process started by the kernel during booting",
          "A process that initializes hardware devices",
          "A process that initializes the file system",
          "A process that initializes user accounts",
        ],
        correctAnswer: "The first process started by the kernel during booting",
      },
      {
        question: "What is the process ID of the init process in Unix/Linux?",
        options: ["1", "0", "-1", "None of the above"],
        correctAnswer: "1",
      },
      {
        question: "What is a process group?",
        options: [
          "A collection of related processes",
          "A group of processes with the same priority",
          "A group of processes that share the same memory",
          "A group of processes that are executed simultaneously",
        ],
        correctAnswer: "A collection of related processes",
      },
      {
        question: "What is a job in the context of an operating system?",
        options: [
          "A unit of work that is to be executed by the CPU",
          "A process that is currently being executed by the CPU",
          "A collection of related processes",
          "A program that is stored on disk",
        ],
        correctAnswer: "A unit of work that is to be executed by the CPU",
      },
      {
        question: "What is the purpose of the 'nice' value in Unix/Linux?",
        options: [
          "To determine the scheduling priority of a process",
          "To determine the amount of memory allocated to a process",
          "To determine the number of CPU cycles allocated to a process",
          "To determine the number of I/O operations a process can perform",
        ],
        correctAnswer: "To determine the scheduling priority of a process",
      },
      {
        question: "What is the range of 'nice' values in Unix/Linux?",
        options: ["-20 to 19", "0 to 39", "-19 to 20", "1 to 40"],
        correctAnswer: "-20 to 19",
      },
      {
        question: "What is the default 'nice' value for a process in Unix/Linux?",
        options: ["0", "-20", "19", "10"],
        correctAnswer: "0",
      },
    ],
    3: [
      // OS Set 3: Memory Management (30 questions)
      {
        question: "What is the main purpose of memory management in an operating system?",
        options: [
          "To allocate and deallocate memory space as needed by processes",
          "To increase the physical memory of the computer",
          "To reduce the amount of memory used by the operating system",
          "To encrypt data stored in memory",
        ],
        correctAnswer: "To allocate and deallocate memory space as needed by processes",
      },
      {
        question: "What is fragmentation?",
        options: [
          "The condition where memory space is wasted",
          "The process of breaking a file into smaller pieces",
          "The process of compressing data to save memory",
          "The process of encrypting data in memory",
        ],
        correctAnswer: "The condition where memory space is wasted",
      },
      {
        question: "What is internal fragmentation?",
        options: [
          "Memory wastage within allocated memory blocks",
          "Memory wastage between allocated memory blocks",
          "Memory wastage due to swapping",
          "Memory wastage due to paging",
        ],
        correctAnswer: "Memory wastage within allocated memory blocks",
      },
      {
        question: "What is external fragmentation?",
        options: [
          "Memory wastage between allocated memory blocks",
          "Memory wastage within allocated memory blocks",
          "Memory wastage due to swapping",
          "Memory wastage due to paging",
        ],
        correctAnswer: "Memory wastage between allocated memory blocks",
      },
      {
        question: "What is compaction?",
        options: [
          "A technique to reduce external fragmentation by moving all occupied memory blocks to one end",
          "A technique to reduce internal fragmentation by resizing memory blocks",
          "A technique to compress data in memory",
          "A technique to encrypt data in memory",
        ],
        correctAnswer: "A technique to reduce external fragmentation by moving all occupied memory blocks to one end",
      },
      {
        question: "What is paging?",
        options: [
          "A memory management scheme that eliminates the need for contiguous allocation of physical memory",
          "A technique to compress data in memory",
          "A technique to encrypt data in memory",
          "A technique to reduce internal fragmentation",
        ],
        correctAnswer:
          "A memory management scheme that eliminates the need for contiguous allocation of physical memory",
      },
      {
        question: "What is a page in the context of memory management?",
        options: [
          "A fixed-size block of memory",
          "A variable-size block of memory",
          "A register in the CPU",
          "A type of cache memory",
        ],
        correctAnswer: "A fixed-size block of memory",
      },
      {
        question: "What is a page fault?",
        options: [
          "An error that occurs when a program accesses a page that is not currently in physical memory",
          "An error that occurs when a page is corrupted",
          "An error that occurs when a page is too large",
          "An error that occurs when a page is too small",
        ],
        correctAnswer: "An error that occurs when a program accesses a page that is not currently in physical memory",
      },
      {
        question: "What is the purpose of a page table?",
        options: [
          "To map virtual addresses to physical addresses",
          "To store the contents of pages",
          "To keep track of free pages",
          "To keep track of page faults",
        ],
        correctAnswer: "To map virtual addresses to physical addresses",
      },
      {
        question: "What is a Translation Lookaside Buffer (TLB)?",
        options: [
          "A cache for page table entries",
          "A buffer for storing pages",
          "A buffer for storing processes",
          "A buffer for storing I/O operations",
        ],
        correctAnswer: "A cache for page table entries",
      },
      {
        question: "What is segmentation?",
        options: [
          "A memory management scheme that supports the user view of memory",
          "A technique to compress data in memory",
          "A technique to encrypt data in memory",
          "A technique to reduce external fragmentation",
        ],
        correctAnswer: "A memory management scheme that supports the user view of memory",
      },
      {
        question: "What is the difference between paging and segmentation?",
        options: [
          "Paging divides memory into fixed-size blocks, segmentation divides memory into variable-size blocks",
          "Segmentation divides memory into fixed-size blocks, paging divides memory into variable-size blocks",
          "Paging is used for virtual memory, segmentation is used for physical memory",
          "Segmentation is used for virtual memory, paging is used for physical memory",
        ],
        correctAnswer:
          "Paging divides memory into fixed-size blocks, segmentation divides memory into variable-size blocks",
      },
      {
        question: "What is demand paging?",
        options: [
          "A technique where pages are loaded into memory only when they are needed",
          "A technique where all pages are loaded into memory at once",
          "A technique where pages are loaded into memory based on a predefined schedule",
          "A technique where pages are loaded into memory based on their priority",
        ],
        correctAnswer: "A technique where pages are loaded into memory only when they are needed",
      },
      {
        question: "What is the working set model?",
        options: [
          "A model that keeps track of the set of pages that a process is currently using",
          "A model that keeps track of all the pages that a process has ever used",
          "A model that keeps track of the set of processes that are currently running",
          "A model that keeps track of the set of processes that have ever run",
        ],
        correctAnswer: "A model that keeps track of the set of pages that a process is currently using",
      },
      {
        question: "What is the purpose of the page replacement algorithm?",
        options: [
          "To decide which page to remove from memory when a new page needs to be loaded",
          "To decide which page to load into memory",
          "To decide which process to run next",
          "To decide which process to terminate when memory is full",
        ],
        correctAnswer: "To decide which page to remove from memory when a new page needs to be loaded",
      },
      {
        question: "What is the Least Recently Used (LRU) page replacement algorithm?",
        options: [
          "An algorithm that replaces the page that has not been used for the longest period of time",
          "An algorithm that replaces the page that has been used most recently",
          "An algorithm that replaces the page that has been used least frequently",
          "An algorithm that replaces the page that has been in memory for the longest time",
        ],
        correctAnswer: "An algorithm that replaces the page that has not been used for the longest period of time",
      },
      {
        question: "What is the First-In-First-Out (FIFO) page replacement algorithm?",
        options: [
          "An algorithm that replaces the page that has been in memory for the longest time",
          "An algorithm that replaces the page that has been in memory for the shortest time",
          "An algorithm that replaces the page that has been used most recently",
          "An algorithm that replaces the page that has been used least recently",
        ],
        correctAnswer: "An algorithm that replaces the page that has been in memory for the longest time",
      },
      {
        question: "What is the Optimal page replacement algorithm?",
        options: [
          "An algorithm that replaces the page that will not be used for the longest period of time in the future",
          "An algorithm that replaces the page that will be used most frequently in the future",
          "An algorithm that replaces the page that has been in memory for the longest time",
          "An algorithm that replaces the page that has been used least recently",
        ],
        correctAnswer:
          "An algorithm that replaces the page that will not be used for the longest period of time in the future",
      },
      {
        question: "What is the Second Chance (or Clock) page replacement algorithm?",
        options: [
          "A modified version of FIFO that gives a second chance to pages that have been referenced",
          "An algorithm that gives priority to pages that have been referenced twice",
          "An algorithm that replaces pages in a circular manner",
          "An algorithm that replaces pages based on a random selection",
        ],
        correctAnswer: "A modified version of FIFO that gives a second chance to pages that have been referenced",
      },
      {
        question: "What is the Not Recently Used (NRU) page replacement algorithm?",
        options: [
          "An algorithm that replaces pages based on their reference and modification status",
          "An algorithm that replaces pages that have not been used recently",
          "An algorithm that replaces pages that have been used most recently",
          "An algorithm that replaces pages that have been modified recently",
        ],
        correctAnswer: "An algorithm that replaces pages based on their reference and modification status",
      },
      {
        question: "What is the purpose of the dirty bit in page tables?",
        options: [
          "To indicate whether a page has been modified since it was loaded into memory",
          "To indicate whether a page is currently in memory",
          "To indicate whether a page is protected from modification",
          "To indicate whether a page has been referenced recently",
        ],
        correctAnswer: "To indicate whether a page has been modified since it was loaded into memory",
      },
      {
        question: "What is the purpose of the reference bit in page tables?",
        options: [
          "To indicate whether a page has been accessed recently",
          "To indicate whether a page has been modified recently",
          "To indicate whether a page is currently in memory",
          "To indicate whether a page is protected from access",
        ],
        correctAnswer: "To indicate whether a page has been accessed recently",
      },
      {
        question: "What is the purpose of the valid bit in page tables?",
        options: [
          "To indicate whether a page is currently in memory",
          "To indicate whether a page has been modified recently",
          "To indicate whether a page has been accessed recently",
          "To indicate whether a page is protected from access",
        ],
        correctAnswer: "To indicate whether a page is currently in memory",
      },
      {
        question: "What is the purpose of the protection bit in page tables?",
        options: [
          "To indicate the type of access allowed for a page",
          "To indicate whether a page has been modified recently",
          "To indicate whether a page has been accessed recently",
          "To indicate whether a page is currently in memory",
        ],
        correctAnswer: "To indicate the type of access allowed for a page",
      },
      {
        question: "What is the purpose of the page frame?",
        options: [
          "A fixed-size block of physical memory",
          "A fixed-size block of virtual memory",
          "A variable-size block of physical memory",
          "A variable-size block of virtual memory",
        ],
        correctAnswer: "A fixed-size block of physical memory",
      },
      {
        question: "What is the purpose of the page offset?",
        options: [
          "To specify the location of a word within a page",
          "To specify the location of a page within memory",
          "To specify the size of a page",
          "To specify the number of pages in memory",
        ],
        correctAnswer: "To specify the location of a word within a page",
      },
      {
        question: "What is the purpose of the page number?",
        options: [
          "To specify which page is being referenced",
          "To specify the size of a page",
          "To specify the location of a word within a page",
          "To specify the number of pages in memory",
        ],
        correctAnswer: "To specify which page is being referenced",
      },
      {
        question: "What is the purpose of the swap space?",
        options: [
          "A space on disk used to store pages that are not currently in memory",
          "A space in memory used to store pages that are not currently in use",
          "A space on disk used to store processes that are not currently running",
          "A space in memory used to store processes that are not currently running",
        ],
        correctAnswer: "A space on disk used to store pages that are not currently in memory",
      },
      {
        question: "What is the Belady's anomaly?",
        options: [
          "The phenomenon where increasing the number of page frames results in an increase in the number of page faults",
          "The phenomenon where decreasing the number of page frames results in a decrease in the number of page faults",
          "The phenomenon where the number of page faults remains constant regardless of the number of page frames",
          "The phenomenon where the number of page frames remains constant regardless of the number of page faults",
        ],
        correctAnswer:
          "The phenomenon where increasing the number of page frames results in an increase in the number of page faults",
      },
    ],
    4: [
      // OS Set 4: File Systems (30 questions)
      {
        question: "What is a file system?",
        options: [
          "A method for storing and organizing computer files and the data they contain",
          "A type of memory used for storing files",
          "A program that creates files",
          "A hardware device that stores files",
        ],
        correctAnswer: "A method for storing and organizing computer files and the data they contain",
      },
      {
        question: "What is a file?",
        options: [
          "A named collection of related data that is stored on a storage device",
          "A program that is currently running",
          "A hardware device that stores data",
          "A type of memory used for storing data",
        ],
        correctAnswer: "A named collection of related data that is stored on a storage device",
      },
      {
        question: "What is a directory?",
        options: [
          "A file that contains a list of other files or directories",
          "A program that lists files",
          "A hardware device that stores files",
          "A type of memory used for storing files",
        ],
        correctAnswer: "A file that contains a list of other files or directories",
      },
      {
        question: "What is a path?",
        options: [
          "A string that specifies the location of a file or directory",
          "A program that finds files",
          "A hardware device that stores files",
          "A type of memory used for storing files",
        ],
        correctAnswer: "A string that specifies the location of a file or directory",
      },
      {
        question: "What is an absolute path?",
        options: [
          "A path that starts from the root directory",
          "A path that starts from the current directory",
          "A path that is not relative",
          "A path that is not symbolic",
        ],
        correctAnswer: "A path that starts from the root directory",
      },
      {
        question: "What is a relative path?",
        options: [
          "A path that starts from the current directory",
          "A path that starts from the root directory",
          "A path that is not absolute",
          "A path that is not symbolic",
        ],
        correctAnswer: "A path that starts from the current directory",
      },
      {
        question: "What is a file descriptor?",
        options: [
          "An abstract indicator used to access a file",
          "A program that describes files",
          "A hardware device that stores files",
          "A type of memory used for storing files",
        ],
        correctAnswer: "An abstract indicator used to access a file",
      },
      {
        question: "What is a file pointer?",
        options: [
          "A pointer that indicates the current position in a file",
          "A pointer to a file in memory",
          "A pointer to a file on disk",
          "A pointer to a file descriptor",
        ],
        correctAnswer: "A pointer that indicates the current position in a file",
      },
      {
        question: "What is a file attribute?",
        options: [
          "Metadata about a file, such as its size, creation time, etc.",
          "A property of a file system",
          "A property of a directory",
          "A property of a path",
        ],
        correctAnswer: "Metadata about a file, such as its size, creation time, etc.",
      },
      {
        question: "What is a file operation?",
        options: [
          "An action that can be performed on a file, such as read, write, etc.",
          "A mathematical operation performed on a file",
          "A property of a file system",
          "A property of a directory",
        ],
        correctAnswer: "An action that can be performed on a file, such as read, write, etc.",
      },
      {
        question: "What is a file system mounting?",
        options: [
          "The process of making a file system accessible at a certain point in the directory tree",
          "The process of creating a file system",
          "The process of deleting a file system",
          "The process of moving a file system",
        ],
        correctAnswer: "The process of making a file system accessible at a certain point in the directory tree",
      },
      {
        question: "What is a file system unmounting?",
        options: [
          "The process of making a file system inaccessible",
          "The process of creating a file system",
          "The process of deleting a file system",
          "The process of moving a file system",
        ],
        correctAnswer: "The process of making a file system inaccessible",
      },
      {
        question: "What is a file system check?",
        options: [
          "The process of verifying the integrity of a file system",
          "The process of creating a file system",
          "The process of deleting a file system",
          "The process of moving a file system",
        ],
        correctAnswer: "The process of verifying the integrity of a file system",
      },
      {
        question: "What is a file system repair?",
        options: [
          "The process of fixing errors in a file system",
          "The process of creating a file system",
          "The process of deleting a file system",
          "The process of moving a file system",
        ],
        correctAnswer: "The process of fixing errors in a file system",
      },
      {
        question: "What is a file system backup?",
        options: [
          "The process of creating a copy of a file system",
          "The process of creating a file system",
          "The process of deleting a file system",
          "The process of moving a file system",
        ],
        correctAnswer: "The process of creating a copy of a file system",
      },
      {
        question: "What is a file system restore?",
        options: [
          "The process of replacing a file system with a backup",
          "The process of creating a file system",
          "The process of deleting a file system",
          "The process of moving a file system",
        ],
        correctAnswer: "The process of replacing a file system with a backup",
      },
      {
        question: "What is a file system format?",
        options: [
          "The process of preparing a storage device for use with a specific file system",
          "The process of creating a file system",
          "The process of deleting a file system",
          "The process of moving a file system",
        ],
        correctAnswer: "The process of preparing a storage device for use with a specific file system",
      },
      {
        question: "What is a file system defragmentation?",
        options: [
          "The process of reorganizing files on a storage device to reduce fragmentation",
          "The process of creating a file system",
          "The process of deleting a file system",
          "The process of moving a file system",
        ],
        correctAnswer: "The process of reorganizing files on a storage device to reduce fragmentation",
      },
      {
        question: "What is a file system quota?",
        options: [
          "A limit on the amount of disk space that can be used by a user or group",
          "A limit on the number of files that can be created",
          "A limit on the size of a file",
          "A limit on the number of directories that can be created",
        ],
        correctAnswer: "A limit on the amount of disk space that can be used by a user or group",
      },
      {
        question: "What is a file system journal?",
        options: [
          "A log of changes made to a file system",
          "A type of file system",
          "A program that manages file systems",
          "A hardware device that stores file systems",
        ],
        correctAnswer: "A log of changes made to a file system",
      },
      {
        question: "What is a journaling file system?",
        options: [
          "A file system that keeps track of changes in a journal before committing them to the main file system",
          "A file system that does not use a journal",
          "A file system that is used for storing journals",
          "A file system that is used for logging",
        ],
        correctAnswer:
          "A file system that keeps track of changes in a journal before committing them to the main file system",
      },
      {
        question: "What is the advantage of a journaling file system?",
        options: [
          "It can recover more quickly from a crash or power failure",
          "It uses less disk space",
          "It is faster than non-journaling file systems",
          "It supports larger files",
        ],
        correctAnswer: "It can recover more quickly from a crash or power failure",
      },
      {
        question: "What is a file system block?",
        options: [
          "The smallest unit of storage in a file system",
          "A type of file system",
          "A program that manages file systems",
          "A hardware device that stores file systems",
        ],
        correctAnswer: "The smallest unit of storage in a file system",
      },
      {
        question: "What is a file system cluster?",
        options: [
          "A group of sectors on a disk that is the smallest unit of storage in a file system",
          "A group of file systems",
          "A group of files",
          "A group of directories",
        ],
        correctAnswer: "A group of sectors on a disk that is the smallest unit of storage in a file system",
      },
      {
        question: "What is a file system inode?",
        options: [
          "A data structure that stores information about a file except its name and data",
          "A data structure that stores only the name of a file",
          "A data structure that stores only the data of a file",
          "A data structure that stores information about a directory",
        ],
        correctAnswer: "A data structure that stores information about a file except its name and data",
      },
      {
        question: "What is a file system superblock?",
        options: [
          "A data structure that contains information about the file system",
          "A data structure that contains information about a file",
          "A data structure that contains information about a directory",
          "A data structure that contains information about a disk",
        ],
        correctAnswer: "A data structure that contains information about the file system",
      },
      {
        question: "What is a file system bitmap?",
        options: [
          "A data structure that keeps track of which blocks are free and which are in use",
          "A data structure that keeps track of which files are free and which are in use",
          "A data structure that keeps track of which directories are free and which are in use",
          "A data structure that keeps track of which disks are free and which are in use",
        ],
        correctAnswer: "A data structure that keeps track of which blocks are free and which are in use",
      },
      {
        question: "What is a file system cache?",
        options: [
          "A temporary storage area for frequently accessed file system data",
          "A permanent storage area for file system data",
          "A program that manages file systems",
          "A hardware device that stores file systems",
        ],
        correctAnswer: "A temporary storage area for frequently accessed file system data",
      },
      {
        question: "What is a file system buffer?",
        options: [
          "A temporary storage area for file system data that is being transferred",
          "A permanent storage area for file system data",
          "A program that manages file systems",
          "A hardware device that stores file systems",
        ],
        correctAnswer: "A temporary storage area for file system data that is being transferred",
      },
      {
        question: "What is a file system driver?",
        options: [
          "A program that allows the operating system to interact with a specific type of file system",
          "A hardware device that stores file systems",
          "A program that creates file systems",
          "A program that deletes file systems",
        ],
        correctAnswer: "A program that allows the operating system to interact with a specific type of file system",
      },
    ],
    5: [
      // OS Set 5: Security and Protection (30 questions)
      {
        question: "What is the principle of least privilege?",
        options: [
          "A principle that states that a process should have only the privileges necessary to complete its task",
          "A principle that states that a process should have all privileges",
          "A principle that states that a process should have no privileges",
          "A principle that states that all processes should have the same privileges",
        ],
        correctAnswer:
          "A principle that states that a process should have only the privileges necessary to complete its task",
      },
      {
        question: "What is a security policy?",
        options: [
          "A set of rules that define what is allowed and what is not allowed in a system",
          "A program that enforces security",
          "A hardware device that provides security",
          "A type of memory used for storing security information",
        ],
        correctAnswer: "A set of rules that define what is allowed and what is not allowed in a system",
      },
      {
        question: "What is authentication?",
        options: [
          "The process of verifying the identity of a user or process",
          "The process of granting access to resources",
          "The process of encrypting data",
          "The process of decrypting data",
        ],
        correctAnswer: "The process of verifying the identity of a user or process",
      },
      {
        question: "What is authorization?",
        options: [
          "The process of granting access to resources",
          "The process of verifying the identity of a user or process",
          "The process of encrypting data",
          "The process of decrypting data",
        ],
        correctAnswer: "The process of granting access to resources",
      },
      {
        question: "What is a password?",
        options: [
          "A secret word or string of characters used for authentication",
          "A program that enforces security",
          "A hardware device that provides security",
          "A type of memory used for storing security information",
        ],
        correctAnswer: "A secret word or string of characters used for authentication",
      },
      {
        question: "What is a password hash?",
        options: [
          "A one-way function that converts a password into a fixed-size string of characters",
          "A two-way function that converts a password into a fixed-size string of characters",
          "A program that stores passwords",
          "A hardware device that stores passwords",
        ],
        correctAnswer: "A one-way function that converts a password into a fixed-size string of characters",
      },
      {
        question: "What is a salt in the context of password hashing?",
        options: [
          "Random data that is used as an additional input to a one-way function that hashes a password",
          "A type of password",
          "A program that stores passwords",
          "A hardware device that stores passwords",
        ],
        correctAnswer: "Random data that is used as an additional input to a one-way function that hashes a password",
      },
      {
        question: "What is a brute force attack?",
        options: [
          "An attack that tries all possible combinations of characters to find a password",
          "An attack that exploits a vulnerability in a system",
          "An attack that intercepts communication between two parties",
          "An attack that pretends to be a legitimate entity",
        ],
        correctAnswer: "An attack that tries all possible combinations of characters to find a password",
      },
      {
        question: "What is a dictionary attack?",
        options: [
          "An attack that tries all words in a dictionary as passwords",
          "An attack that exploits a vulnerability in a system",
          "An attack that intercepts communication between two parties",
          "An attack that pretends to be a legitimate entity",
        ],
        correctAnswer: "An attack that tries all words in a dictionary as passwords",
      },
      {
        question: "What is a man-in-the-middle attack?",
        options: [
          "An attack that intercepts communication between two parties",
          "An attack that exploits a vulnerability in a system",
          "An attack that tries all possible combinations of characters to find a password",
          "An attack that pretends to be a legitimate entity",
        ],
        correctAnswer: "An attack that intercepts communication between two parties",
      },
      {
        question: "What is a denial-of-service attack?",
        options: [
          "An attack that makes a service unavailable to its intended users",
          "An attack that exploits a vulnerability in a system",
          "An attack that intercepts communication between two parties",
          "An attack that pretends to be a legitimate entity",
        ],
        correctAnswer: "An attack that makes a service unavailable to its intended users",
      },
      {
        question: "What is a distributed denial-of-service attack?",
        options: [
          "A denial-of-service attack that uses multiple sources",
          "A denial-of-service attack that uses a single source",
          "A denial-of-service attack that targets multiple destinations",
          "A denial-of-service attack that targets a single destination",
        ],
        correctAnswer: "A denial-of-service attack that uses multiple sources",
      },
      {
        question: "What is a firewall?",
        options: [
          "A system designed to prevent unauthorized access to or from a private network",
          "A program that encrypts data",
          "A hardware device that stores security information",
          "A type of memory used for storing security information",
        ],
        correctAnswer: "A system designed to prevent unauthorized access to or from a private network",
      },
      {
        question: "What is an intrusion detection system?",
        options: [
          "A system that monitors a network or system for malicious activity or policy violations",
          "A system that prevents unauthorized access to a network",
          "A system that encrypts data",
          "A system that decrypts data",
        ],
        correctAnswer: "A system that monitors a network or system for malicious activity or policy violations",
      },
      {
        question: "What is an intrusion prevention system?",
        options: [
          "A system that not only detects but also prevents malicious activity or policy violations",
          "A system that only detects malicious activity or policy violations",
          "A system that encrypts data",
          "A system that decrypts data",
        ],
        correctAnswer: "A system that not only detects but also prevents malicious activity or policy violations",
      },
      {
        question: "What is encryption?",
        options: [
          "The process of converting information into a code to prevent unauthorized access",
          "The process of converting a code back into information",
          "The process of verifying the identity of a user or process",
          "The process of granting access to resources",
        ],
        correctAnswer: "The process of converting information into a code to prevent unauthorized access",
      },
      {
        question: "What is decryption?",
        options: [
          "The process of converting a code back into information",
          "The process of converting information into a code to prevent unauthorized access",
          "The process of verifying the identity of a user or process",
          "The process of granting access to resources",
        ],
        correctAnswer: "The process of converting a code back into information",
      },
      {
        question: "What is symmetric encryption?",
        options: [
          "Encryption where the same key is used for both encryption and decryption",
          "Encryption where different keys are used for encryption and decryption",
          "Encryption that uses a public key",
          "Encryption that uses a private key",
        ],
        correctAnswer: "Encryption where the same key is used for both encryption and decryption",
      },
      {
        question: "What is asymmetric encryption?",
        options: [
          "Encryption where different keys are used for encryption and decryption",
          "Encryption where the same key is used for both encryption and decryption",
          "Encryption that uses a single key",
          "Encryption that does not use any key",
        ],
        correctAnswer: "Encryption where different keys are used for encryption and decryption",
      },
      {
        question: "What is a public key?",
        options: [
          "A key that can be freely distributed and is used for encryption in asymmetric encryption",
          "A key that must be kept secret and is used for decryption in asymmetric encryption",
          "A key that is used for both encryption and decryption in symmetric encryption",
          "A key that is not used for encryption or decryption",
        ],
        correctAnswer: "A key that can be freely distributed and is used for encryption in asymmetric encryption",
      },
      {
        question: "What is a private key?",
        options: [
          "A key that must be kept secret and is used for decryption in asymmetric encryption",
          "A key that can be freely distributed and is used for encryption in asymmetric encryption",
          "A key that is used for both encryption and decryption in symmetric encryption",
          "A key that is not used for encryption or decryption",
        ],
        correctAnswer: "A key that must be kept secret and is used for decryption in asymmetric encryption",
      },
      {
        question: "What is a digital signature?",
        options: [
          "A mathematical scheme for verifying the authenticity of digital messages or documents",
          "A handwritten signature that has been digitized",
          "A type of encryption",
          "A type of decryption",
        ],
        correctAnswer: "A mathematical scheme for verifying the authenticity of digital messages or documents",
      },
      {
        question: "What is a digital certificate?",
        options: [
          "An electronic document that uses a digital signature to bind a public key with an identity",
          "A document that certifies the ownership of a digital asset",
          "A type of encryption",
          "A type of decryption",
        ],
        correctAnswer: "An electronic document that uses a digital signature to bind a public key with an identity",
      },
      {
        question: "What is a certificate authority?",
        options: [
          "An entity that issues digital certificates",
          "An entity that verifies digital signatures",
          "An entity that encrypts data",
          "An entity that decrypts data",
        ],
        correctAnswer: "An entity that issues digital certificates",
      },
      {
        question: "What is a security token?",
        options: [
          "A physical device that an authorized user is given to aid in authentication",
          "A type of digital certificate",
          "A type of encryption",
          "A type of decryption",
        ],
        correctAnswer: "A physical device that an authorized user is given to aid in authentication",
      },
      {
        question: "What is two-factor authentication?",
        options: [
          "A method of confirming a user's identity by using two different types of authentication factors",
          "A method of confirming a user's identity by asking two different questions",
          "A method of encrypting data twice",
          "A method of decrypting data twice",
        ],
        correctAnswer:
          "A method of confirming a user's identity by using two different types of authentication factors",
      },
      {
        question: "What is biometric authentication?",
        options: [
          "Authentication that uses physical or behavioral characteristics of a person",
          "Authentication that uses a password",
          "Authentication that uses a security token",
          "Authentication that uses a digital certificate",
        ],
        correctAnswer: "Authentication that uses physical or behavioral characteristics of a person",
      },
      {
        question: "What is a security audit?",
        options: [
          "A systematic evaluation of the security of a system",
          "A program that enforces security",
          "A hardware device that provides security",
          "A type of memory used for storing security information",
        ],
        correctAnswer: "A systematic evaluation of the security of a system",
      },
      {
        question: "What is a security vulnerability?",
        options: [
          "A weakness in a system that can be exploited to perform unauthorized actions",
          "A strength in a system that prevents unauthorized actions",
          "A program that enforces security",
          "A hardware device that provides security",
        ],
        correctAnswer: "A weakness in a system that can be exploited to perform unauthorized actions",
      },
    ],
    6: [
      // OS Set 6: Distributed Systems (30 questions)
      {
        question: "What is a distributed system?",
        options: [
          "A system whose components are located on different networked computers",
          "A system that is distributed to multiple users",
          "A system that distributes tasks among multiple processors",
          "A system that distributes data among multiple storage devices",
        ],
        correctAnswer: "A system whose components are located on different networked computers",
      },
      {
        question: "What is a client-server model?",
        options: [
          "A distributed application structure that partitions tasks between providers of a resource or service, called servers, and service requesters, called clients",
          "A model where all computers have equal responsibilities",
          "A model where one computer controls all others",
          "A model where computers work independently",
        ],
        correctAnswer:
          "A distributed application structure that partitions tasks between providers of a resource or service, called servers, and service requesters, called clients",
      },
      {
        question: "What is a peer-to-peer model?",
        options: [
          "A model where all computers have equal responsibilities",
          "A distributed application structure that partitions tasks between providers of a resource or service, called servers, and service requesters, called clients",
          "A model where one computer controls all others",
          "A model where computers work independently",
        ],
        correctAnswer: "A model where all computers have equal responsibilities",
      },
      {
        question: "What is a distributed file system?",
        options: [
          "A file system that allows access to files from multiple hosts sharing via a computer network",
          "A file system that is distributed to multiple users",
          "A file system that distributes files among multiple storage devices",
          "A file system that distributes tasks among multiple processors",
        ],
        correctAnswer: "A file system that allows access to files from multiple hosts sharing via a computer network",
      },
      {
        question: "What is a distributed database?",
        options: [
          "A database in which storage devices are not all attached to a common processor",
          "A database that is distributed to multiple users",
          "A database that distributes data among multiple storage devices",
          "A database that distributes tasks among multiple processors",
        ],
        correctAnswer: "A database in which storage devices are not all attached to a common processor",
      },
      {
        question: "What is a distributed transaction?",
        options: [
          "A transaction that is executed across multiple separate databases",
          "A transaction that is distributed to multiple users",
          "A transaction that distributes data among multiple storage devices",
          "A transaction that distributes tasks among multiple processors",
        ],
        correctAnswer: "A transaction that is executed across multiple separate databases",
      },
      {
        question: "What is a distributed lock?",
        options: [
          "A lock that is used to synchronize access to a shared resource in a distributed system",
          "A lock that is distributed to multiple users",
          "A lock that distributes data among multiple storage devices",
          "A lock that distributes tasks among multiple processors",
        ],
        correctAnswer: "A lock that is used to synchronize access to a shared resource in a distributed system",
      },
      {
        question: "What is a distributed deadlock?",
        options: [
          "A deadlock that occurs in a distributed system",
          "A deadlock that is distributed to multiple users",
          "A deadlock that distributes data among multiple storage devices",
          "A deadlock that distributes tasks among multiple processors",
        ],
        correctAnswer: "A deadlock that occurs in a distributed system",
      },
      {
        question: "What is a distributed algorithm?",
        options: [
          "An algorithm that is designed to run on a distributed system",
          "An algorithm that is distributed to multiple users",
          "An algorithm that distributes data among multiple storage devices",
          "An algorithm that distributes tasks among multiple processors",
        ],
        correctAnswer: "An algorithm that is designed to run on a distributed system",
      },
      {
        question: "What is a distributed operating system?",
        options: [
          "An operating system that manages a collection of independent computers and makes them appear as a single coherent system",
          "An operating system that is distributed to multiple users",
          "An operating system that distributes data among multiple storage devices",
          "An operating system that distributes tasks among multiple processors",
        ],
        correctAnswer:
          "An operating system that manages a collection of independent computers and makes them appear as a single coherent system",
      },
      {
        question: "What is a network operating system?",
        options: [
          "An operating system that includes special functions for connecting computers and devices into a local-area network (LAN)",
          "An operating system that operates over a network",
          "An operating system that is a network itself",
          "An operating system that distributes tasks among multiple processors",
        ],
        correctAnswer:
          "An operating system that includes special functions for connecting computers and devices into a local-area network (LAN)",
      },
      {
        question: "What is a cluster?",
        options: [
          "A group of computers that work together so that they can be viewed as a single system",
          "A group of users that share a computer",
          "A group of processors in a computer",
          "A group of storage devices in a computer",
        ],
        correctAnswer: "A group of computers that work together so that they can be viewed as a single system",
      },
      {
        question: "What is a grid computing?",
        options: [
          "A distributed computing paradigm that makes use of computers that are part of different administrative domains to reach a common goal",
          "A computing paradigm that uses a grid of processors",
          "A computing paradigm that uses a grid of storage devices",
          "A computing paradigm that uses a grid of users",
        ],
        correctAnswer:
          "A distributed computing paradigm that makes use of computers that are part of different administrative domains to reach a common goal",
      },
      {
        question: "What is cloud computing?",
        options: [
          "A model of computer use in which services stored on the internet are provided to users on a temporary basis",
          "A computing paradigm that uses clouds of processors",
          "A computing paradigm that uses clouds of storage devices",
          "A computing paradigm that uses clouds of users",
        ],
        correctAnswer:
          "A model of computer use in which services stored on the internet are provided to users on a temporary basis",
      },
      {
        question: "What is a virtual machine?",
        options: [
          "An emulation of a computer system",
          "A machine that is virtually present",
          "A machine that is not real",
          "A machine that is used for virtualization",
        ],
        correctAnswer: "An emulation of a computer system",
      },
      {
        question: "What is virtualization?",
        options: [
          "The act of creating a virtual version of something, including virtual computer hardware platforms, storage devices, and computer network resources",
          "The act of making something virtual",
          "The act of using virtual machines",
          "The act of creating virtual reality",
        ],
        correctAnswer:
          "The act of creating a virtual version of something, including virtual computer hardware platforms, storage devices, and computer network resources",
      },
      {
        question: "What is a hypervisor?",
        options: [
          "A program that allows multiple operating systems to share a single hardware host",
          "A program that supervises hyperlinks",
          "A program that supervises hyperthreading",
          "A program that supervises hypertext",
        ],
        correctAnswer: "A program that allows multiple operating systems to share a single hardware host",
      },
      {
        question: "What is a container?",
        options: [
          "A standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another",
          "A unit that contains software",
          "A unit that contains hardware",
          "A unit that contains both software and hardware",
        ],
        correctAnswer:
          "A standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another",
      },
      {
        question: "What is Docker?",
        options: [
          "A platform for developing, shipping, and running applications in containers",
          "A platform for developing, shipping, and running applications in virtual machines",
          "A platform for developing, shipping, and running applications in the cloud",
          "A platform for developing, shipping, and running applications in a grid",
        ],
        correctAnswer: "A platform for developing, shipping, and running applications in containers",
      },
      {
        question: "What is Kubernetes?",
        options: [
          "An open-source system for automating deployment, scaling, and management of containerized applications",
          "An open-source system for automating deployment, scaling, and management of virtual machines",
          "An open-source system for automating deployment, scaling, and management of cloud applications",
          "An open-source system for automating deployment, scaling, and management of grid applications",
        ],
        correctAnswer:
          "An open-source system for automating deployment, scaling, and management of containerized applications",
      },
      {
        question: "What is a microservice?",
        options: [
          "A software development technique where an application is structured as a collection of loosely coupled services",
          "A small service that is provided to users",
          "A service that is micro in size",
          "A service that is provided by a microprocessor",
        ],
        correctAnswer:
          "A software development technique where an application is structured as a collection of loosely coupled services",
      },
      {
        question: "What is a service-oriented architecture?",
        options: [
          "A style of software design where services are provided to the other components by application components, through a communication protocol over a network",
          "An architecture that is oriented towards services",
          "An architecture that provides services",
          "An architecture that uses services",
        ],
        correctAnswer:
          "A style of software design where services are provided to the other components by application components, through a communication protocol over a network",
      },
      {
        question: "What is a web service?",
        options: [
          "A service that is available over the web and uses standardized XML messaging system",
          "A service that is provided on the web",
          "A service that uses the web",
          "A service that is part of the web",
        ],
        correctAnswer: "A service that is available over the web and uses standardized XML messaging system",
      },
      {
        question: "What is SOAP?",
        options: [
          "A protocol for exchanging structured information in the implementation of web services in computer networks",
          "A protocol for cleaning data",
          "A protocol for securing data",
          "A protocol for storing data",
        ],
        correctAnswer:
          "A protocol for exchanging structured information in the implementation of web services in computer networks",
      },
      {
        question: "What is REST?",
        options: [
          "A style of software architecture for distributed systems such as the World Wide Web",
          "A state of being free from work or activity",
          "A state of being at ease",
          "A state of being inactive",
        ],
        correctAnswer: "A style of software architecture for distributed systems such as the World Wide Web",
      },
      {
        question: "What is an API?",
        options: [
          "A set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service",
          "A program interface",
          "A user interface",
          "A hardware interface",
        ],
        correctAnswer:
          "A set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service",
      },
      {
        question: "What is a distributed denial-of-service attack?",
        options: [
          "A cyber-attack where the perpetrator seeks to make a machine or network resource unavailable to its intended users by temporarily or indefinitely disrupting services of a host connected to the Internet",
          "An attack that denies service to a single user",
          "An attack that denies service to a single machine",
          "An attack that denies service to a single network",
        ],
        correctAnswer:
          "A cyber-attack where the perpetrator seeks to make a machine or network resource unavailable to its intended users by temporarily or indefinitely disrupting services of a host connected to the Internet",
      },
      {
        question: "What is a botnet?",
        options: [
          "A number of Internet-connected devices, each of which is running one or more bots",
          "A network of robots",
          "A network of bot users",
          "A network of bot programs",
        ],
        correctAnswer: "A number of Internet-connected devices, each of which is running one or more bots",
      },
      {
        question: "What is a zombie computer?",
        options: [
          "A computer connected to the Internet that has been compromised by a hacker, computer virus or trojan horse and can be used to perform malicious tasks under remote direction",
          "A computer that is no longer in use",
          "A computer that is slow",
          "A computer that is old",
        ],
        correctAnswer:
          "A computer connected to the Internet that has been compromised by a hacker, computer virus or trojan horse and can be used to perform malicious tasks under remote direction",
      },
    ],
    7: [
      // OS Set 7: I/O Systems and Device Management (30 questions)
      {
        question: "What is an I/O device?",
        options: [
          "A hardware device that is used to communicate with the outside world",
          "A software device that is used to communicate with the outside world",
          "A hardware device that is used to communicate with the inside world",
          "A software device that is used to communicate with the inside world",
        ],
        correctAnswer: "A hardware device that is used to communicate with the outside world",
      },
      {
        question: "What is an I/O controller?",
        options: [
          "A hardware component that interfaces between the CPU and I/O devices",
          "A software component that interfaces between the CPU and I/O devices",
          "A hardware component that interfaces between the memory and I/O devices",
          "A software component that interfaces between the memory and I/O devices",
        ],
        correctAnswer: "A hardware component that interfaces between the CPU and I/O devices",
      },
      {
        question: "What is an I/O port?",
        options: [
          "A connection point for an I/O device",
          "A type of I/O device",
          "A type of I/O controller",
          "A type of I/O bus",
        ],
        correctAnswer: "A connection point for an I/O device",
      },
      {
        question: "What is an I/O bus?",
        options: [
          "A communication pathway connecting I/O devices to the CPU and memory",
          "A type of I/O device",
          "A type of I/O controller",
          "A type of I/O port",
        ],
        correctAnswer: "A communication pathway connecting I/O devices to the CPU and memory",
      },
      {
        question: "What is an I/O interrupt?",
        options: [
          "A signal sent by an I/O device to the CPU indicating that it has completed an operation",
          "A signal sent by the CPU to an I/O device indicating that it should start an operation",
          "A signal sent by an I/O device to another I/O device",
          "A signal sent by the CPU to another CPU",
        ],
        correctAnswer: "A signal sent by an I/O device to the CPU indicating that it has completed an operation",
      },
      {
        question: "What is an I/O scheduler?",
        options: [
          "A component of the operating system that decides the order in which I/O operations are submitted to the storage device",
          "A component of the operating system that decides which I/O device to use",
          "A component of the operating system that decides which I/O controller to use",
          "A component of the operating system that decides which I/O port to use",
        ],
        correctAnswer:
          "A component of the operating system that decides the order in which I/O operations are submitted to the storage device",
      },
      {
        question: "What is direct memory access (DMA)?",
        options: [
          "A feature of computer systems that allows certain hardware subsystems to access main system memory independently of the CPU",
          "A feature of computer systems that allows the CPU to access I/O devices directly",
          "A feature of computer systems that allows I/O devices to access other I/O devices directly",
          "A feature of computer systems that allows the CPU to access memory directly",
        ],
        correctAnswer:
          "A feature of computer systems that allows certain hardware subsystems to access main system memory independently of the CPU",
      },
      {
        question: "What is memory-mapped I/O?",
        options: [
          "A method of performing input/output operations between the CPU and peripheral devices in a computer by treating the devices as if they were memory locations",
          "A method of mapping memory to I/O devices",
          "A method of mapping I/O devices to memory",
          "A method of performing I/O operations between memory and peripheral devices",
        ],
        correctAnswer:
          "A method of performing input/output operations between the CPU and peripheral devices in a computer by treating the devices as if they were memory locations",
      },
      {
        question: "What is port-mapped I/O?",
        options: [
          "A method of performing input/output operations between the CPU and peripheral devices in a computer by using a separate address space from that used for memory",
          "A method of mapping ports to I/O devices",
          "A method of mapping I/O devices to ports",
          "A method of performing I/O operations between ports and peripheral devices",
        ],
        correctAnswer:
          "A method of performing input/output operations between the CPU and peripheral devices in a computer by using a separate address space from that used for memory",
      },
      {
        question: "What is a device driver?",
        options: [
          "A program that operates or controls a particular type of device that is attached to a computer",
          "A person who drives a device",
          "A device that drives a program",
          "A program that is driven by a device",
        ],
        correctAnswer: "A program that operates or controls a particular type of device that is attached to a computer",
      },
      {
        question: "What is a character device?",
        options: [
          "A device that provides a character stream interface",
          "A device that has a character",
          "A device that is a character",
          "A device that uses characters",
        ],
        correctAnswer: "A device that provides a character stream interface",
      },
      {
        question: "What is a block device?",
        options: [
          "A device that provides a block interface",
          "A device that has a block",
          "A device that is a block",
          "A device that uses blocks",
        ],
        correctAnswer: "A device that provides a block interface",
      },
      {
        question: "What is a network device?",
        options: [
          "A device that provides a network interface",
          "A device that has a network",
          "A device that is a network",
          "A device that uses networks",
        ],
        correctAnswer: "A device that provides a network interface",
      },
      {
        question: "What is a device file?",
        options: [
          "A file that represents a device in a file system",
          "A file that is a device",
          "A file that has a device",
          "A file that uses devices",
        ],
        correctAnswer: "A file that represents a device in a file system",
      },
      {
        question: "What is a device node?",
        options: [
          "A file that represents a device in a file system",
          "A node that is a device",
          "A node that has a device",
          "A node that uses devices",
        ],
        correctAnswer: "A file that represents a device in a file system",
      },
      {
        question: "What is a device major number?",
        options: [
          "A number that identifies the device driver",
          "A number that identifies the device",
          "A number that identifies the device file",
          "A number that identifies the device node",
        ],
        correctAnswer: "A number that identifies the device driver",
      },
      {
        question: "What is a device minor number?",
        options: [
          "A number that identifies a specific device among a group of devices that share the same major number",
          "A number that identifies the device driver",
          "A number that identifies the device file",
          "A number that identifies the device node",
        ],
        correctAnswer:
          "A number that identifies a specific device among a group of devices that share the same major number",
      },
      {
        question: "What is a device special file?",
        options: [
          "A file that represents a device in a file system",
          "A file that is special to a device",
          "A file that has a special device",
          "A file that uses special devices",
        ],
        correctAnswer: "A file that represents a device in a file system",
      },
      {
        question: "What is a device controller?",
        options: [
          "A hardware component that interfaces between the CPU and I/O devices",
          "A software component that interfaces between the CPU and I/O devices",
          "A hardware component that interfaces between the memory and I/O devices",
          "A software component that interfaces between the memory and I/O devices",
        ],
        correctAnswer: "A hardware component that interfaces between the CPU and I/O devices",
      },
      {
        question: "What is a device register?",
        options: [
          "A register in a device controller that is used to communicate with the CPU",
          "A register in the CPU that is used to communicate with a device controller",
          "A register in a device that is used to communicate with another device",
          "A register in the CPU that is used to communicate with another CPU",
        ],
        correctAnswer: "A register in a device controller that is used to communicate with the CPU",
      },
      {
        question: "What is a device buffer?",
        options: [
          "A buffer in a device controller that is used to store data being transferred between the device and the CPU",
          "A buffer in the CPU that is used to store data being transferred between the CPU and a device",
          "A buffer in a device that is used to store data being transferred between the device and another device",
          "A buffer in the CPU that is used to store data being transferred between the CPU and another CPU",
        ],
        correctAnswer:
          "A buffer in a device controller that is used to store data being transferred between the device and the CPU",
      },
      {
        question: "What is a device status register?",
        options: [
          "A register in a device controller that contains information about the current status of the device",
          "A register in the CPU that contains information about the current status of a device",
          "A register in a device that contains information about the current status of another device",
          "A register in the CPU that contains information about the current status of another CPU",
        ],
        correctAnswer:
          "A register in a device controller that contains information about the current status of the device",
      },
      {
        question: "What is a device control register?",
        options: [
          "A register in a device controller that is used to control the operation of the device",
          "A register in the CPU that is used to control the operation of a device",
          "A register in a device that is used to control the operation of another device",
          "A register in the CPU that is used to control the operation of another CPU",
        ],
        correctAnswer: "A register in a device controller that is used to control the operation of the device",
      },
      {
        question: "What is a device data register?",
        options: [
          "A register in a device controller that is used to transfer data between the device and the CPU",
          "A register in the CPU that is used to transfer data between the CPU and a device",
          "A register in a device that is used to transfer data between the device and another device",
          "A register in the CPU that is used to transfer data between the CPU and another CPU",
        ],
        correctAnswer: "A register in a device controller that is used to transfer data between the device and the CPU",
      },
      {
        question: "What is a device address register?",
        options: [
          "A register in a device controller that is used to specify the address of the data being transferred",
          "A register in the CPU that is used to specify the address of the data being transferred",
          "A register in a device that is used to specify the address of the data being transferred",
          "A register in the CPU that is used to specify the address of the data being transferred",
        ],
        correctAnswer:
          "A register in a device controller that is used to specify the address of the data being transferred",
      },
      {
        question: "What is a device command register?",
        options: [
          "A register in a device controller that is used to specify the command to be executed by the device",
          "A register in the CPU that is used to specify the command to be executed by a device",
          "A register in a device that is used to specify the command to be executed by another device",
          "A register in the CPU that is used to specify the command to be executed by another CPU",
        ],
        correctAnswer:
          "A register in a device controller that is used to specify the command to be executed by the device",
      },
      {
        question: "What is a device error register?",
        options: [
          "A register in a device controller that contains information about any errors that have occurred during device operation",
          "A register in the CPU that contains information about any errors that have occurred during device operation",
          "A register in a device that contains information about any errors that have occurred during the operation of another device",
          "A register in the CPU that contains information about any errors that have occurred during the operation of another CPU",
        ],
        correctAnswer:
          "A register in a device controller that contains information about any errors that have occurred during device operation",
      },
      {
        question: "What is a device interrupt vector?",
        options: [
          "A memory location that contains the address of the interrupt service routine for a device",
          "A memory location that contains the address of a device",
          "A memory location that contains the address of a device controller",
          "A memory location that contains the address of a device register",
        ],
        correctAnswer: "A memory location that contains the address of the interrupt service routine for a device",
      },
    ],
  },
  java: {
    1: [
      // Java Set 1 (30 questions)
      {
        question: "Which of the following is not a Java feature?",
        options: ["Object-oriented", "Use of pointers", "Portable", "Dynamic and Extensible"],
        correctAnswer: "Use of pointers",
      },
      {
        question: "What is the return type of the hashCode() method in the Object class?",
        options: ["Object", "int", "long", "void"],
        correctAnswer: "int",
      },
      {
        question: "Which of the following is a valid declaration of a char?",
        options: ["char ch = '\\utea';", "char ca = 'tea';", "char cr = \\u0223;", "char cc = '\\itea';"],
        correctAnswer: "char ch = '\\utea';",
      },
      {
        question: "What is the size of float and double in Java?",
        options: ["32 and 64 bit", "32 and 32 bit", "64 and 64 bit", "64 and 32 bit"],
        correctAnswer: "32 and 64 bit",
      },
      {
        question: "Which of the following is true about the anonymous inner class?",
        options: [
          "It has only methods",
          "Objects can't be created",
          "It has a fixed class name",
          "It has no class name",
        ],
        correctAnswer: "It has no class name",
      },
      // Add more questions to reach 30 for a complete set
      {
        question: "Which package contains the Random class?",
        options: ["java.util package", "java.lang package", "java.awt package", "java.io package"],
        correctAnswer: "java.util package",
      },
      {
        question: "What is the default value of the local variables?",
        options: ["null", "0", "Depends on the type of variable", "No default value for local variables"],
        correctAnswer: "No default value for local variables",
      },
      {
        question: "Which of the following is a marker interface?",
        options: ["Runnable interface", "Remote interface", "Readable interface", "Result interface"],
        correctAnswer: "Remote interface",
      },
      {
        question: "Which keyword is used for accessing the features of a package?",
        options: ["import", "package", "extends", "export"],
        correctAnswer: "import",
      },
      {
        question: "In which memory is the String constant pool stored?",
        options: ["Stack", "String memory", "Heap memory", "Random storage space"],
        correctAnswer: "Heap memory",
      },
      // Note: In a real implementation, you would add 20 more questions to reach 30
    ],
    // Additional sets would be defined here
  },
  python: {
    1: [
      // Python Set 1 (30 questions)
      {
        question: "What is the output of print(type(1/2))?",
        options: ["<class 'int'>", "<class 'float'>", "<class 'fraction'>", "<class 'double'>"],
        correctAnswer: "<class 'float'>",
      },
      {
        question: "Which of the following is not a core data type in Python?",
        options: ["Lists", "Dictionary", "Tuples", "Class"],
        correctAnswer: "Class",
      },
      {
        question: "What will be the output of the following Python code: print('Hello World'[::-1])?",
        options: ["Hello World", "dlroW olleH", "dlrow olleH", "Error"],
        correctAnswer: "dlroW olleH",
      },
      {
        question: "Which of the following is the correct extension of the Python file?",
        options: [".python", ".pl", ".py", ".p"],
        correctAnswer: ".py",
      },
      {
        question: "What does pip stand for in Python?",
        options: [
          "Pip Installs Python",
          "Pip Installs Packages",
          "Preferred Installer Program",
          "Python Internal Package",
        ],
        correctAnswer: "Preferred Installer Program",
      },
      // Add more questions to reach 30 for a complete set
      {
        question: "Which of the following is not a valid way to create a list in Python?",
        options: ["list1 = []", "list1 = list()", "list1 = [1, 2, 3]", "list1 = (1, 2, 3)"],
        correctAnswer: "list1 = (1, 2, 3)",
      },
      {
        question: "What is the output of print(0.1 + 0.2 == 0.3)?",
        options: ["True", "False", "Error", "None"],
        correctAnswer: "False",
      },
      {
        question: "Which of the following is not a keyword in Python?",
        options: ["pass", "assert", "nonlocal", "static"],
        correctAnswer: "static",
      },
      {
        question: "What is the output of print(2 * 3 ** 3)?",
        options: ["54", "18", "36", "None of the above"],
        correctAnswer: "54",
      },
      {
        question: "Which of the following is used to define a block of code in Python language?",
        options: ["Indentation", "Key", "Brackets", "All of the above"],
        correctAnswer: "Indentation",
      },
      // Note: In a real implementation, you would add 20 more questions to reach 30
    ],
    // Additional sets would be defined here
  },
  // Add more topics as needed
}

// Make sure quizData is globally available
window.quizData = quizData

