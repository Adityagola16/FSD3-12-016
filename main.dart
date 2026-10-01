import 'package:flutter/material.dart';

void main() => runApp(StudentExpenseApp());

class StudentExpenseApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: ExpenseTracker(),
      theme: ThemeData(primarySwatch: Colors.blue),
    );
  }
}

class ExpenseTracker extends StatefulWidget {
  @override
  _ExpenseTrackerState createState() => _ExpenseTrackerState();
}

class _ExpenseTrackerState extends State<ExpenseTracker> {
  final List<Map<String, dynamic>> _expenses = [];
  final double _cashLimit = 500.0; // Your monthly limit
  double _totalSpent = 0.0;

  final TextEditingController _amountController = TextEditingController();
  final TextEditingController _labelController = TextEditingController();

  void _addExpense() {
    final double amount = double.tryParse(_amountController.text) ?? 0;
    if (amount <= 0) return;

    setState(() {
      _expenses.add({
        'label': _labelController.text,
        'amount': amount,
        'date': DateTime.now()
      });
      _totalSpent += amount;
    });

    _amountController.clear();
    _labelController.clear();

    // Check for limit and show alert
    if (_totalSpent >= _cashLimit) {
      _showAlert("Limit Reached!", "You have exceeded your \$${_cashLimit} limit.");
    } else if (_totalSpent >= _cashLimit * 0.8) {
      _showAlert("Warning", "You have used 80% of your budget.");
    }
  }

  void _showAlert(String title, String message) {
    showDialog(
      context: context,
      builder: (ctx) => AlertDialog(
        title: Text(title),
        content: Text(message),
        actions: [TextButton(onPressed: () => Navigator.pop(ctx), child: Text("OK"))],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Student Budget Tracker")),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Text("Total Spent: \$${_totalSpent.toStringAsFixed(2)} / \$${_cashLimit}",
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(controller: _labelController, decoration: InputDecoration(labelText: "Description (e.g. Lunch)")),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(controller: _amountController, decoration: InputDecoration(labelText: "Amount"), keyboardType: TextInputType.number),
          ),
          ElevatedButton(onPressed: _addExpense, child: Text("Add Expense")),
          Expanded(
            child: ListView.builder(
              itemCount: _expenses.length,
              itemBuilder: (ctx, index) => ListTile(
                title: Text(_expenses[index]['label']),
                trailing: Text("\$${_expenses[index]['amount']}"),
              ),
            ),
          )
        ],
      ),
    );
  }
}